const Rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
})

const Dolar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export { Rupiah, Dolar }
