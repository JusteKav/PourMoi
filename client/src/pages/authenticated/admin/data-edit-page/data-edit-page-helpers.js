export const checkTitle = (title, dataArr) => {
  const filteredColor = dataArr.filter((el) => el.title === title);
  if (filteredColor.length !== 0) {
    return false;
  } else {
    return true;
  }
};
