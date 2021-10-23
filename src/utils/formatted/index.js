export const formatDate = value => {
  const date = value.split(' ');
  const newDate = new Date(date[0]);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  return `${day} ${months[month]} ${year}`;
};

export const formatRupiah = (number = ' ') => {
  let tempNum = String(number).split('').reverse();

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 === 0 && i !== tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  return `Rp${tempNum.reverse().join('')}`;
};
