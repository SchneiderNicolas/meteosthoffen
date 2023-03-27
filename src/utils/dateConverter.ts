export const dateConverter = (date: string) => {
  const hours = parseInt(date.split(':')[0]);
  const minutes = date.split(':')[1];
  if (hours === 0) {
    return '12:' + minutes + ' AM';
  } else if (hours < 12) {
    return date + ' AM';
  } else if (hours === 12) {
    return '12:' + minutes + ' PM';
  } else {
    return (hours % 12) + ':' + minutes + ' PM';
  }
};
