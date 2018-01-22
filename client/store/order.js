import axios from 'axios'

const CREATE_ORDER = 'CREATE_ORDER'

const defaultOrders = []

const createOrder = order => ({type: CREATE_ORDER, order})

export const postOrder = (order, wallet) =>
	dispatch =>
		axios.post(`/api/orders`, {order, wallet})
		.then(res => res.data)
		.then(() => dispatch(createOrder(order)))
		.catch(err => console.log(err))

export default (state = defaultOrders, action) => {
	switch (action.type) {
		case CREATE_ORDER:
			return [...state, action.order]
		default:
			return state
	}
}
