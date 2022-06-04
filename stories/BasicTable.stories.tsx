import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "./carbon.scss";
import { TableBase } from "../src";
import {
  rowsMany as demoRowsMany,
  columns as demoColumns,
  sortInfo as demoSortInfo,
} from "./data";

export default {
  title: "Examples/Basic Table",
  component: TableBase,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: "radio" },
  },
} as ComponentMeta<typeof TableBase>;

const Template: ComponentStory<typeof TableBase> = (args) => (
  <TableBase {...args} />
);

export const DefaultProps = Template.bind({});
DefaultProps.args = {
  pageSizes: [10, 25, 50, 100, 200, 500],
  columns: demoColumns,
  rows: demoRowsMany,
  sortInfo: demoSortInfo,
};
