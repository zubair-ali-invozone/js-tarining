import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function AddProduct(props) {
    const [productTitle, setProductTitle] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        const data = {
            product_title: productTitle,
            product_description: productDescription,
            product_price: productPrice,
            product_image: productImage
        };

        const headers = {
            Accept: "application/json"
        }

        axios.post('', data, {headers: headers})
            .then((res) => {

            })
            .catch((error) => {

            });
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Product</h4>
                <p className="card-description">
                    Add New Product
                </p>
                <form className="forms-sample">
                    <div className="form-group">
                        <label htmlFor="product-title">Product Title</label>
                        <input type="text" className="form-control" id="product-title" placeholder="Product Title"
                               onChange={(e) => setProductTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product-description">Product Description</label>
                        <textarea className="form-control" id="product-description" rows="10"
                                  placeholder="Product Description"
                                  onChange={(e) => setProductDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product-price">Product Price</label>
                        <input type="text" className="form-control" id="product-price" placeholder="Product Price"
                               onChange={(e) => setProductPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product-image">Product Image</label>
                        <input type="file" className="form-control" id="product-image" placeholder="Product Price"
                               onChange={(e) => setProductImage(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary me-2" onClick={submitForm}>Submit</button>
                    <Link to="/" className="btn btn-light">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;