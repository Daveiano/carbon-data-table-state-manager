import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CarbonDataTableStateManager from "./index";
import {
  rowsMany,
  columns,
  sortInfo,
  rows,
  rowsSelected,
} from "../stories/data";

describe("Running Test for CarbonDataTableStateManager Button", () => {
  test("test", () => {
    const { container } = render(
      <CarbonDataTableStateManager
        pageSizes={[10, 25, 50, 100, 200, 500]}
        sortInfo={sortInfo}
        columns={columns}
        rows={rows}
        pageSize={5}
        start={0}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
