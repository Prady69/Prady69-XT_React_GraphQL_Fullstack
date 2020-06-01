export default function formatDate(value) {
  const date1 = new Date(+value);
  const date2 = new Date();
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  yearsDiff += ` ${yearsDiff === 1 ? 'year' : 'years'} ago`;
  return yearsDiff;
}
