export const getStringToday = () => {
  const date = new Date();
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};

export const getStringTime = () => {
  const today = new Date();
  const todayMin = today.getMinutes();
  const minutes = today.getMinutes() < 10 ? "0" + todayMin : todayMin;
  const time = today.getHours() + ":" + minutes;
  return time;
};
