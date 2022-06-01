import { dataItem } from "../index";

/**
 * @param property The table column.
 * @param data The rows.
 *
 * @returns boolean
 */
const dataHasRecordsForProperty = (
  property: string | number,
  data: dataItem[]
): boolean => {
  return (
    data.filter((item) => Object.prototype.hasOwnProperty.call(item, property))
      .length > 0
  );
};

export default dataHasRecordsForProperty;
