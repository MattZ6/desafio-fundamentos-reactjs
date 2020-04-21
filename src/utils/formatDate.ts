const formatDate = (value: Date | string): string => {
  const date = new Date(value);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  const formatedDate = `${day}/${month}/${date.getFullYear()}`;

  return formatedDate;
};

export default formatDate;
