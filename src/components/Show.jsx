import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebaseConfig/firebase";
import { Link } from "react-router-dom";
const Show = () => {
  const [setProducts, setSetProducts] = useState([]);
  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    const resData = await getDocs(productsCollection);
    setSetProducts(resData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteProduct = async (id) => {
    const resData = await doc(db, "products", id);
    await deleteDoc(resData);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(setProducts);

  return (
    <div className="w-100">
      <div>
        <h2 className="bg-primary h1 text-center my-3">
          <Link to="/create" className=" text-white">
            create
          </Link>
        </h2>
      </div>
      <div className="row">
        <div className="col">descripcion</div>
        <div className="col">stock</div>
        <div className="col">Action</div>
      </div>
      {setProducts.map((item) => (
        <div className="row" key={item.id}>
          <div className="col">{item.description}</div>
          <div className="col">{item.stock}</div>
          <div className="col flex">
            <button className="btn btn-success">
              <Link to={`/edit/:${item.id}`} className="text-white">
                edit
              </Link>
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;
