import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";

const Form = ({ cart, total, clearCart, handleId, handleGoBack }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    handleGoBack();
    event.preventDefault();
    const order = {
      buyer: { name: name, lastName: lastName, email: email, phone: phone },
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      handleId(res.id);
      clearCart();
      //updateprod();
    });
  };

  //const updateprod = () => {
  //    const orderDoc = doc(db, 'orders', 'A29yVRkpjasoaRfEo3G5');
  //    updateDoc(orderDoc, { total: 100 });
  //};

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="mt-20 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto flex flex-col items-center justify-center">
      <h1 className="mb-8 text-center text-xl font-bold">
        Let's finish your order
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full items-center justify-center"
      >
        <label className="block mb-5">
          <span className="block text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            placeholder="Enter Your Name Here"
            name="name"
            value={name}
            onChange={handleChangeName}
            className="border-b-2 border-blue-300 placeholder-slate-400 w-full"
          />
        </label>
        <label className="block mb-5">
          <span className="block text-sm font-medium text-slate-700">
            Last Name
          </span>
          <input
            type="text"
            placeholder="Enter Your Last Name Here"
            name="lastName"
            value={lastName}
            onChange={handleChangeLastName}
            className="border-b-2 border-blue-300 placeholder-slate-400 w-full"
          />
        </label>
        <label className="block mb-5">
          <span className="block text-sm font-medium text-slate-700">
            Phone
          </span>
          <input
            type="number"
            placeholder="Enter Your Phone Number Here"
            name="phone"
            value={phone}
            onChange={handleChangePhone}
            className="border-b-2 border-blue-300 placeholder-slate-400 w-full"
          />
        </label>
        <label className="block mb-5">
          <span className="block text-sm font-medium text-slate-700">
            E-Mail
          </span>
          <input
            type="email"
            placeholder="Enter Your E-Mail Here"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            className="border-b-2 border-blue-300 placeholder-slate-400 w-full"
          />
        </label>
        <div className="w-full mx-auto flex items-center justify-center">
        <button
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 bg-red-500 text-slate-900 mr-4"
          type="button"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        <button
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
          type="submit"
        >
          Finish your Order
        </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
