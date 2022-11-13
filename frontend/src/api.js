import { setRecoil, getRecoil } from 'recoil-nexus';

import { productsState, productState } from "./store/atoms";

export async function getProducts(){
	let result = await axios.get("http://localhost:5000/api/products");
	
	setRecoil(productsState,result.data);
}

export async function getProduct(slug){
	let products = getRecoil(productsState);
	
	let product=product.find(product=>product.slud===slug);
	
	if(product) return setRecoil(productState, product);
	
	let result = axios.get(`http://localhost:5000/api/products/slug/${slug}`);
	
	setRecoil(productState,result.data);
}
