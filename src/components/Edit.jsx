import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig/firebase";

const Edit = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const newId = id.slice(1);

  async function update(e) {
    e.preventDefault();
    const products = doc(db, "products", newId);
    const data = {
      description: description,
      stock: stock,
    };
    await updateDoc(products, data);
    navigate("/");
  }

  const getProduct = async (id) => {
    const product = await getDoc(doc(db, "products", newId));

    if (product.exists) {
      const { description, stock } = product.data();
      setDescription(description);
      setStock(stock);
    } else {
      console.log("no existe");
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      <form onSubmit={(e) => update(e)}>
        <div className="mb-3">
          <label className="form-label">description</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">stock</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
