import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomDataTable from './components/CustomDataTable';
import {
  rowsMany as demoRowsMany,
  columns as demoColumns,
  sortInfo as demoSortInfo,
} from './table-data';
import 'carbon-components/scss/globals/scss/styles.scss';

const App = () => (
  <CustomDataTable
    columns={demoColumns}
    rows={demoRowsMany}
    sortInfo={demoSortInfo}
    hasSelection={true}
    pageSize={5}
    start={0}
  />
);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
