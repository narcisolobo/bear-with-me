import format from 'date-fns/format';

function formatDate(date) {
  return format(new Date(date), 'MMM d, yyyy');
}

export default formatDate;
