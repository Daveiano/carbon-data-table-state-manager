import { TABLE_SORT_DIRECTION } from "../src/misc";

export const columns = [
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
    title: "Felt temperature",
    small: `in °C`,
    id: "felt_temperature",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Dew point",
    small: `in °C`,
    id: "dew_point",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Pressure",
    small: `in hPa`,
    id: "pressure",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Humidity",
    small: `in %`,
    id: "humidity",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Wind",
    small: `in km/h`,
    id: "wind",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Gust",
    small: `in km/h`,
    id: "gust",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "Solar irradiation",
    small: `in w/m²`,
    id: "solar",
    sortCycle: "tri-states-from-ascending",
  },
  {
    title: "UV Index",
    id: "uvi",
    sortCycle: "tri-states-from-ascending",
  },
];

export const rows = [
  {
    time: 1614913020,
    temperature: 0.4,
    humidity: 99,
    dew_point: 0.2,
    felt_temperature: 0.4,
    wind: 0,
    gust: 0,
    pressure: 986.1,
    solar: 0,
    uvi: 0,
    id: "2",
    selected: false,
  },
  {
    time: 1614920220,
    temperature: -0.2,
    humidity: 96,
    dew_point: -0.7,
    felt_temperature: -0.2,
    wind: 1.4,
    gust: 3.6,
    pressure: 987.6,
    solar: 0,
    uvi: 0,
    id: "3",
    selected: false,
  },
  {
    time: 1614927420,
    temperature: -0.7,
    humidity: 93,
    dew_point: -1.8,
    felt_temperature: -0.7,
    wind: 1.1,
    gust: 1.8,
    pressure: 989.7,
    solar: 38.1,
    uvi: 0,
    id: "4",
    selected: false,
  },
  {
    time: 1614934620,
    temperature: 1.2,
    humidity: 77,
    dew_point: -2.4,
    felt_temperature: 1.2,
    wind: 0,
    gust: 0,
    pressure: 991,
    solar: 154.3,
    uvi: 1,
    id: "5",
    selected: false,
  },
  {
    time: 1614941820,
    temperature: 2.4,
    humidity: 58,
    dew_point: -5,
    felt_temperature: 2.4,
    wind: 0.4,
    gust: 1.8,
    pressure: 992.2,
    solar: 106.6,
    uvi: 1,
    id: "6",
    selected: false,
  },
];

export const rowsMany = Array.from(new Array(50))
  .map((_item, i) =>
    rows.map((row, j) => ({
      ...row,
      id: i * 6 + j,
    }))
  )
  .flat();

export const rowsSelected = Array.from(new Array(50))
  .map((_item, i) =>
    rows.map((row, j) => ({
      ...row,
      id: i * 6 + j,
      selected: i * 6 + j < 3 || i * 6 + j === 8,
    }))
  )
  .flat();

export const sortInfo = {
  columnId: "name",
  direction: TABLE_SORT_DIRECTION.ASC,
};
