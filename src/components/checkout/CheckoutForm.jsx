import React, { useState } from "react";
import CheckoutProd from "./CheckoutProd";
import CustomInput from "./CustomInput";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  phone: "",
  address: "",
};
const cartItems = JSON.parse(localStorage.getItem("cartItem"));

const CheckoutForm = () => {
  const [form, setForm] = useState(initialState);
  const [agreedTC, setAgreedTC] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function agreeTerms() {
    setAgreedTC((prev) => !prev);
  }

  function placeOrder(e) {
    e.preventDefault();
    const order = [...cartItems];
    console.log(order);
  }

  return (
    <div className="w-full uppercase">
      <div>
        <form action="" className="flex flex-col w-full gap-6">
          <article className="flex flex-col gap-2 lg:flex-row lg:gap-10">
            <div className="w-full p-2 ">
              <h3 className="py-2">personal details</h3>
              <label htmlFor="">
                <CustomInput
                  type={"text"}
                  placeholder={"name"}
                  value={form.name}
                  handleChange={handleInput}
                  name={"name"}
                />
              </label>
              <label htmlFor="">
                <CustomInput
                  type={"text"}
                  placeholder={"address"}
                  value={form.address}
                  handleChange={handleInput}
                  name={"address"}
                />
              </label>
              <label htmlFor="">
                <CustomInput
                  type={"number"}
                  placeholder={"phone"}
                  value={form.phone}
                  handleChange={handleInput}
                  name={"phone"}
                />
              </label>
            </div>
            {/* item */}
            <div className="w-full lg:mt-3 ">
              <h3 className="py-2">items</h3>
              <CheckoutProd cartItems={cartItems} />
            </div>
          </article>
          {/* button */}
          <div className="mt-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-center">
              <input type="checkbox" onClick={agreeTerms} />
              <small className="whitespace-nowrap font-extralight text-slate-400  lowercase">
                I have read and agreed to the{" "}
                <Link className="underline">terms and conditions. </Link>
              </small>
            </div>
            <button
              className={
                agreedTC
                  ? "w-full lg:w-[350px] lg:mx-auto border-2 py-4 font-extralight rounded-lg uppercase hover:bg-slate-100 hover:text-slate-900 cursor-pointer "
                  : "w-full lg:w-[350px] lg:mx-auto border py-4 rounded-lg uppercase text-slate-400"
              }
              disabled={agreedTC}
              onClick={placeOrder}
            >
              place order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
