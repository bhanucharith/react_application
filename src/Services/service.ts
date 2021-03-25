import axios from 'axios'

const api = axios.create({
    baseURL:'https://fakestoreapi.herokuapp.com/products',
});

export const Get_all_products = ()=>{
    return api.get(`/`)
}

export const Get_product_by_id = (id:number)=>{
    return api.get(`/${id}`)
}