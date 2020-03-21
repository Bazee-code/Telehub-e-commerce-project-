import React from 'react';

// local
import {storeProducts,detailProduct} from './data.js';

const ProductContext = React.createContext();
// our context comes with a provider and consumer
// Provider -> provides all the info we require
// Consumer -> uses the info we get from provider
// the Consumer gives us access to our provider

class ProductProvider extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			products : [],
			detailProduct : detailProduct,
			cart : [],
			modalOpen : false,
			modalProduct : detailProduct,
			cartSubTotal : 0,
			cartTax : 0,
			cartTotal : 0
		};
	};   

	componentDidMount(){
		this.setProducts();
	};
	// method to get rid of problem of our array obj been passed as references
	setProducts = () =>{
		let tempProducts = [];
		storeProducts.forEach(item=>{
			const singleItem = {...item}; //copying values from storeProducts
			tempProducts = [...tempProducts,singleItem]; //add them to our empty array
		});
		this.setState(()=>{
			return {products:tempProducts}
		});
	};

	// function that we will use to differentiate our products in the detail page
	getItem =(id)=>{
		const product = this.state.products.find(item =>item.id === id);
		return product;
	};

	handleDetail =(id)=>{
		// console.log("Hello from detail!");
		const product = this.getItem(id);
		this.setState(()=>{
			return {detailProduct:product}
		});
	};

	addToCart =(id)=>{
		// console.log("Hello from cart!");
		let tempProducts = [...this.state.products];
		// we find the index of our products 
		// we will use the index to change the properties of our product that we want to change
		// once our product has been added to cart
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		// change properties of product
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price; //total depends on price

		this.setState(()=>{
			return {products:tempProducts,cart:[...this.state.cart,product]}
		},()=>{
			// console.log(this.state);
			this.addTotals();
		});
	};

	// modal methods that determine how our modal will be
	openModal = (id) =>{
		const product = this.getItem(id);
		this.setState(()=>{
			return {modalProduct:product,modalOpen:true}
		});
	};

	closeModal =()=>{
		this.setState(()=>{
			return {modalOpen:false}
		})
	};

	// cart methods
	increment = (id)=>{
		// console.log("Increment method");
		let tempCart = [...this.state.cart];

		const tempProduct = tempCart.find(item=>item.id === id);
		const index = tempCart.indexOf(tempProduct);
		const product = tempCart[index]; //find specific product
	// change count
		product.count += 1;
		product.total = product.count * product.price;

		this.setState(()=>{
			return{
				cart : [...tempCart]
			}
		},()=>{
			this.addTotals();

		})
	};

	decrement = (id)=>{
		// console.log("Decrement method");
		let tempCart = [...this.state.cart];
		// find specific product in cart
		const tempProduct = tempCart.find(item => item.id === id);
		// find the index of product in cart 
		const index = tempCart.indexOf(tempProduct);
		// use the index to find the specified product in cart
		const product = tempCart[index]; 
		// change count
		if(product.count > 0){
			product.count -= 1;
			product.total = product.count * product.price;

		this.setState(()=>{
			return{
				cart : [...tempCart]
			}
		},()=>{
			this.addTotals();
		})
		}
		
	};

	addTotals =()=>{
		let subTotal = 0;
		this.state.cart.map(item=>(subTotal += item.total))
		const tempTax = subTotal * 0.2; //tax is 20%
		const tax = parseFloat(tempTax.toFixed(2)); //toFixed returns a str
		const total = subTotal + tax;

		this.setState(()=>{
			return{
				cartSubTotal : subTotal,
				cartTax : tax,
				cartTotal : total
			}
		});
	};

	removeItem =(id)=>{
		// console.log("Item removed!");
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];
		// filter the rest of the items and only get the one we want removed
		tempCart = tempCart.filter(item=>item.id !== id);
		// get the product itself and get its index 
		const index = tempProducts.indexOf(this.getItem(id));
		const removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(()=>{
			return{
				cart : [...tempCart],
				products : [...tempProducts]
			}
		},()=>{
			this.addTotals();
		})
	};

	clearCart =()=>{
		// console.log("Cart was cleared!");
		this.setState(()=>{
			return{
			cart : [] 
		}
		},()=>{
			this.setProducts(); //refresh products
			this.addTotals();
		});
	};

	render() {
		return (
			<ProductContext.Provider value={{
				// products : this.state.products,
				 ...this.state,
				detailProduct : this.state.detailProduct,
				handleDetail :this.handleDetail,
				addToCart : this.addToCart,
				openModal : this.openModal,
				closeModal : this.closeModal,
				increment : this.increment,
				decrement : this.decrement,
				removeItem : this.removeItem,
				clearCart : this.clearCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

// create our consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};

// our provider needs to be at the top of our component tree
// i.e must be at the parent component