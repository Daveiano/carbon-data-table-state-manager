import { dataItem } from "../index";

/**
 * @param row A table row.
 * @param searchString A search string.
 * @returns `true` if the given table row matches the given search string.
 */
const doesRowMatchSearchString = (
  row: dataItem,
  searchString: string
): boolean =>
  Object.keys(row).some(
    (key) => key !== "id" && String(row[key] ?? "").indexOf(searchString) >= 0
  );

export default doesRowMatchSearchString;
