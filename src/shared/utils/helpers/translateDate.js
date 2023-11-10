import moment from 'moment';

export default function translateDate(dateNow, fullFormat = false) {
  if (dateNow) {
    let result = moment(dateNow).format(
      `DD/MM/YYYY${fullFormat ? ' HH:mm:ss' : ''}`,
    );
    const startOfToday = moment().startOf('day');
    const startOfDate = moment(dateNow).startOf('day');
    const daysDiff = startOfDate.diff(startOfToday, 'days');
    const days = {
      0: 'Hari ini',
      '-1': 'Kemarin',
      1: 'Besok',
    };

    if (Math.abs(daysDiff) <= 1) {
      result = days[daysDiff];
      if (fullFormat) {
        result += ` - ${moment(dateNow).format('HH:mm:ss')}`;
      }
    }

    return result;
  }
  return '-';
}
