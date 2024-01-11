import request from "./index";
export const login = (data: object) => request.post('/login', data)
export const getDishList = () => request.get('/dish')
export const getOrderList = (status = '') => request.get(`/order?status=${status}`)
export const addDish = (data: object) => request.post('/dish', data)
export const editOrder = (data: object) => request.put('/order', data)

//删除订单接口
export const removeDish = (id: number) => request.delete(`/order/${id}`)
export const delDish = (id: number) => request.delete(`/dish/${id}`)