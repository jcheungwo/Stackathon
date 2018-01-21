import axios from 'axios'

const GET_CURRENCY = 'GET_CURRENCY'

const defaultCurrency = {}

const getCurrency = currency => ({type: GET_CURRENCY, currency})

export const fetchCurrencyInfo = (currency) =>
	dispatch =>
		axios.get(`/api/currencies/${currency.toUpperCase()}`)
		.then(res =>
			dispatch(getCurrency(res.data || defaultCurrency)))
		.catch(err => console.log(err))

export default function (state = defaultCurrency, action) {
	switch (action.type) {
		case GET_CURRENCY:
			return action.currency
		default:
			return state
	}
}
