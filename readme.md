## About

This package emerged through the need of a custom state manager for 
[IBMs Carbon Design Data table component](https://carbondesignsystem.com/components/data-table/usage/).
The default behavior of the component (sorting, filtering, searching) can only be overwritten by 
implementing an own Custom State manager.

Read more about it here: https://github.com/carbon-design-system/carbon/issues/6373#issuecomment-747612917

After implementing this custom state manager, I realized that I need the same code in many projects, so this 
package was born.

The initial code was taken from the example implementation by IBM: https://github.com/carbon-design-system/carbon/issues/6373#issuecomment-747612917

## Features

The package was written with a focus on displaying time series data. 

### Time 

You can supply a column named "time" and an optional [Day.js format string](https://day.js.org/docs/en/display/format). 
The time column will then be formatted according to this format string (default is YYYY/MM/DD HH:mm). Additionaly if you supply
a title prop, the Table will show a description in the form `from <start date> till <end date>`.

## Requirements

**Requires Carbon components v10, migration to v11 is coming soon.**

```
"@carbon/icons-react": "10.x",
"carbon-components": "10.x",
"carbon-components-react": "7.x",
"react": ">=16",
"react-dom": ">=16"
```

## Install

```sh
yarn add carbon-data-table-state-manager
```

or

```sh
npm i carbon-data-table-state-manager --save
```

## Usage

### Example

```
import { CarbonDataTableStateManager } from "carbon-data-table-state-manager";
import { TABLE_SORT_DIRECTION } from "carbon-data-table-state-manager/misc";

const columns = [
  {
    title: "Time",
    id: "time",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Temperature",
    small: `in °C`,
    id: "temperature",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Humidity",
    small: `in %`,
    id: "humidity",
    sortCycle: "tri-states-from-ascending",
  },
];

const rows = [
  {
    time: 1614927420,
    temperature: -0.7,
    humidity: 93,
  },
  {
    time: 2021-03-05T02:57:00.000Z,
    temperature: 1.2,
    humidity: 77,
  },
];

<CarbonDataTableStateManager
  columns={columns}
  rows={rows}
  start={0}
  pageSize={10}
  pageSizes={[10, 25, 50, 100, 200, 500]}
  sortInfo={{
    columnId: "timeParsed",
    direction: TABLE_SORT_DIRECTION.ASC,
  }}
  size="short"
/>
```

### Storybook

See the Storybook for more examples.

### Props

<table>
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>collator?</td>
    <td>Intl.Collator</td>
    <td>new Intl.Collator()</td>
    <td>An Intl.Collator object for string comparison.</td>
  </tr>
  <tr>
    <td>columns</td>
    <td>

```
{
  id: string | number;
  title: string;
  sortCycle?: string;
  small?: string;
  tooltip?: string;
}[]
```

</td>
    <td></td>
    <td>The table headers / column definitions</td>
  </tr>
  <tr>
    <td>hasSelection?</td>
    <td>boolean</td>
    <td>false</td>
    <td>Should the table allow for selection?</td>
  </tr>
  <tr>
    <td>id?</td>
    <td>string</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>pageSize</td>
    <td>number</td>
    <td>5</td>
    <td>Default page size.</td>
  </tr>
  <tr>
    <td>rows</td>
    <td>

```
{
  [key: string]: any;
  selected: boolean;
  time?: string | number;
}[]
```

</td>
    <td></td>
    <td>The actual table rows.</td>
  </tr>
  <tr>
    <td>size?</td>
    <td>"compact" | "lg" | "md" | "normal" | "short" | "sm" | "tall" | "xl" | "xs"</td>
    <td>normal</td>
    <td>Table cell size.</td>
  </tr>
  <tr>
    <td>sortInfo</td>
    <td>

```
{
  columnId: string;
  direction: "ASC" | "DESC" | "NONE";
}
```

</td>
    <td></td>
    <td>Default sorting state</td>
  </tr>
   <tr>
    <td>start</td>
    <td>number</td>
    <td>0</td>
    <td>Offset</td>
  </tr>
   <tr>
    <td>zebra?</td>
    <td>boolean</td>
    <td></td>
    <td>Use zebra styling for table rows</td>
  </tr>
   <tr>
    <td>title?</td>
    <td>string</td>
    <td></td>
    <td>Table title</td>
  </tr>
   <tr>
    <td>dateFormat?</td>
    <td>string</td>
    <td></td>
    <td>

[Day.js format string](https://day.js.org/docs/en/display/format) for formatting the `time` column

</td>
  </tr>
   <tr>
    <td>pageSizes?</td>
    <td>number[]</td>
    <td></td>
    <td>Array of available page sizes for the Pagination.</td>
  </tr>
   <tr>
    <td>emptyCell?</td>
    <td>string</td>
    <td>"-"</td>
    <td>String to render when column has no data.</td>
  </tr>
</table>