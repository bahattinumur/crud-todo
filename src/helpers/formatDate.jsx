const formatDate = (dateStr) => {
  console.log(dateStr);
  const date = dateStr.split(".");

  return date[0] + " / " + date[1];
};

export default formatDate;
