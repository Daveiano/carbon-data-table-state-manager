import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import CarbonDataTableStateManager from "./index";
import { columns, sortInfo, rows, rowsSelected } from "../stories/data";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Europe/Berlin");

describe("Tests for CarbonDataTableStateManager", () => {
  test("basic table render", () => {
    const { container } = render(
      <CarbonDataTableStateManager
        pageSizes={[10, 25, 50, 100, 200, 500]}
        sortInfo={sortInfo}
        columns={columns}
        rows={rows}
        pageSize={50}
        start={0}
        title="My Test Table"
        emptyCell="---"
        zebra={true}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("row selection", () => {
    const { container } = render(
      <CarbonDataTableStateManager
        pageSizes={[10, 25, 50, 100, 200, 500]}
        sortInfo={sortInfo}
        columns={columns}
        rows={rowsSelected}
        pageSize={50}
        start={0}
        hasSelection={true}
      />
    );

    const selectedCount =
      container.getElementsByClassName("bx--batch-summary")[0];
    expect(selectedCount).toHaveTextContent("4 items selected");

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(49);

    fireEvent.click(checkboxes[6]);
    expect(selectedCount).toHaveTextContent("5 items selected");

    // Select all.
    fireEvent.click(checkboxes[0]);
    expect(selectedCount).toHaveTextContent("48 items selected");
  });

  test("sorting", () => {
    const { container } = render(
      <CarbonDataTableStateManager
        pageSizes={[10, 25, 50, 100, 200, 500]}
        sortInfo={sortInfo}
        columns={columns}
        rows={rows}
        pageSize={50}
        start={0}
      />
    );

    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByTestId("sort-temperature"));
    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByTestId("sort-temperature"));
    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByTestId("sort-temperature"));
    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByTestId("sort-time"));
    expect(container).toMatchSnapshot();
  });

  test("pagination", () => {
    const { container } = render(
      <CarbonDataTableStateManager
        pageSizes={[10, 25, 50, 100, 200, 500]}
        sortInfo={sortInfo}
        columns={columns}
        rows={rows}
        pageSize={5}
        start={0}
        title="My Test Table"
        emptyCell="---"
        zebra={true}
      />
    );

    const itemCount = container.getElementsByClassName(
      "bx--pagination__items-count"
    );
    expect(itemCount.length).toBe(1);
    expect(itemCount[0]).toHaveTextContent("1 - 10 of 48 items");
    expect(container).toMatchSnapshot();

    // Set items per page.
    fireEvent.change(getByLabelText(container, "Items per page:"), {
      target: { value: 25 },
    });
    expect(itemCount[0]).toHaveTextContent("1 - 25 of 48 items");
    expect(container).toMatchSnapshot();

    // Use pager.
    fireEvent.change(getByLabelText(container, "Page number, of 2 pages"), {
      target: { value: 2 },
    });
    expect(itemCount[0]).toHaveTextContent("26 - 48 of 48 items");
    expect(container).toMatchSnapshot();
  });
});
