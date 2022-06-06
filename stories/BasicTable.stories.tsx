import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "./carbon.scss";
import { CarbonDataTableStateManager } from "../src";
import { columns, sortInfo, rows, rowsSelected } from "./data";

export default {
  title: "Examples/Basic Table",
  component: CarbonDataTableStateManager,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: "radio" },
  },
} as ComponentMeta<typeof CarbonDataTableStateManager>;

const Template: ComponentStory<typeof CarbonDataTableStateManager> = (args) => (
  <CarbonDataTableStateManager {...args} />
);

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  pageSizes: [10, 25, 50, 100, 200, 500],
  pageSize: 10,
  sortInfo: sortInfo,
  columns: columns,
  rows: rows.slice(0, 15),
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "carbon-data-table-state-manager",
  pageSizes: [10, 25, 50, 100, 200, 500],
  pageSize: 10,
  sortInfo: sortInfo,
  columns: columns,
  rows: rows.slice(0, 15),
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  hasSelection: true,
  pageSizes: [10, 25, 50, 100, 200, 500],
  pageSize: 25,
  sortInfo: sortInfo,
  columns: columns,
  rows: rowsSelected,
};

export const CustomDateFormat = Template.bind({});
CustomDateFormat.args = {
  dateFormat: "DD.MM.YYYY h:m:s",
  pageSizes: [10, 25, 50, 100, 200, 500],
  pageSize: 10,
  sortInfo: sortInfo,
  columns: columns,
  rows: rows.slice(0, 15),
};

export const ManyRows = Template.bind({});
ManyRows.args = {
  pageSizes: [10, 25, 50, 100, 200, 500],
  pageSize: 50,
  sortInfo: sortInfo,
  columns: columns,
  rows: rows,
};
