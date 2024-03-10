import React, { useEffect, useState } from "react";
import CheckoutProd from "./CheckoutProd";
import CustomInput from "./CustomInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, submitOrder } from "../../features/orderSlice";
import Modal from "./Modal";

const initialState = {
  name: "",
  phone: "",
  address: "",
};
const cartItems = JSON.parse(localStorage.getItem("cartItem"));

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [agreedTC, setAgreedTC] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { loading, error, success } = useSelector((state) => state.order);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetInput = () => {
    setForm(initialState);
  };

  function agreeTerms() {
    setAgreedTC((prev) => !prev);
  }

  function placeOrder(e) {
    e.preventDefault();
    console.log("Clicked");
    const orders = [...cartItems];
    console.log(orders);

    const formData = {
      orders: orders,
      name: form.name,
      address: form.name,
      phone: form.phone,
    };

    dispatch(submitOrder(formData));
  }

  useEffect(() => {
    if (success) {
      setShowSuccessModal(true);
      localStorage.removeItem("cartItem");
      dispatch(reset());
      resetInput();
    }
  }, [success]);

  return (
    <div className="w-full uppercase">
      <div>
        <form action="" className="flex flex-col w-full gap-6">
          <article className="flex flex-col gap-2 lg:flex-row lg:gap-10">
            <div className="w-full p-2 ">
              <h3 className="py-2">personal details</h3>
              <label htmlFor="name">
                <CustomInput
                  type={"text"}
                  placeholder={"name"}
                  value={form.name}
                  handleChange={handleInput}
                  name={"name"}
                />
              </label>
              <label htmlFor="address">
                <CustomInput
                  type={"text"}
                  placeholder={"address"}
                  value={form.address}
                  handleChange={handleInput}
                  name={"address"}
                />
              </label>
              <label htmlFor="phone">
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
              type="button"
              className={
                "w-full lg:w-[350px] lg:mx-auto border-2 py-4 font-extralight rounded-lg uppercase hover:bg-slate-100 hover:text-slate-900 cursor-pointer "
              }
              // disabled={agreedTC}
              onClick={placeOrder}
            >
              place order
            </button>
          </div>
        </form>
        {showSuccessModal && <Modal />}
      </div>
    </div>
  );
};

export default CheckoutForm;
