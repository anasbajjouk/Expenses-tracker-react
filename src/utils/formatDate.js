const formatDate = (date) => {
  const formatedDate = new Date(date);
  let month = `${formatedDate.getMonth() + 1}`;
  let day = `${formatedDate.getDate()}`;
  const year = `${formatedDate.getFullYear()}`;

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  //   return `${day}/${month}/${year}`;
  return [year, month, day].join("-");
};

export default formatDate;
