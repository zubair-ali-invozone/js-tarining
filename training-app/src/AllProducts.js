import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productListAction} from "./redux/Actions";

function AllProducts(props) {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {productListLoading, productListData, productListError} = productList;

    useEffect(() => {
        dispatch(productListAction());
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">All Products</h4>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Product Image</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Created On</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productListLoading && (
                            <tr>
                                <td colSpan="7" align="center">Please Wait...</td>
                            </tr>
                        )}
                        {productListData?.map((dataMap, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{dataMap.title}</td>
                                <td>{dataMap.body}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;