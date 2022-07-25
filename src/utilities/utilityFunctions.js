// Utility Functions for Dates
export function getvalidDateDMY(date) {
  const resdate = new Date(date);
  const year = resdate.getFullYear();
  const month =
    (resdate.getMonth() + 1).toString().length === 1
      ? "0" + (resdate.getMonth() + 1)
      : (resdate.getMonth() + 1).toString();
  const day =
    resdate.getDate().toString().length === 1
      ? "0" + resdate.getDate()
      : resdate.getDate().toString();
  return day + "-" + month + "-" + year;
}

export function getTimeFromDate(date) {
  const resdate = new Date(date);
  const hours = resdate.getHours();
  const zone = hours >= 12 ? "PM" : "AM";
  return `${resdate.getHours()}:${resdate.getMinutes()} ${zone}`;
}

export function getvalidDateDMMMY(date) {
  const resdate = new Date(date);
  const year = resdate.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months.find((month, i) => i === resdate.getMonth());
  const day =
    resdate.getDate().toString().length === 1
      ? "0" + resdate.getDate()
      : resdate.getDate().toString();
  return day + " " + month + " " + year;
}

export function getvalidDateDMonthY(date) {
  const resdate = new Date(date);
  const year = resdate.getFullYear();
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months.find((month, i) => i === resdate.getMonth());
  const day =
    resdate.getDate().toString().length === 1
      ? "0" + resdate.getDate()
      : resdate.getDate().toString();
  return day + " " + month + ", " + year;
}
export function getvalidDateYMD(date) {
  const resdate = new Date(date);
  const year = resdate.getFullYear();
  const month =
    (resdate.getMonth() + 1).toString().length === 1
      ? "0" + (resdate.getMonth() + 1)
      : (resdate.getMonth() + 1).toString();
  const day =
    resdate.getDate().toString().length === 1
      ? "0" + resdate.getDate()
      : resdate.getDate().toString();
  return year + "-" + month + "-" + day;
}
