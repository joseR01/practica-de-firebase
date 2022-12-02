import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig/firebase";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  const productsCollection = collection(db, "products");

  async function create(e) {
    e.preventDefault();

    await addDoc(productsCollection, {
      description: description,
      stock: stock,
    });
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={(e) => create(e)}>
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

export default Create;
