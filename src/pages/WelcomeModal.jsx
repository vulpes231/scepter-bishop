import React from "react";
import { Button } from "../components";

const Landing = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen p-6 bg-slate-800 text-slate-100 uppercase">
      <h3>Welcome</h3>
      <article>
        <p>Are you over 21 years old?</p>
      </article>
      <article className="flex">
        <Button title={"YES"} />
        <Button title={"NO"} />
      </article>
      <article>
        To experience scepter &amp; sword wines, you must be of legal age in
        your country of residence. by entering the scepter &amp; sword website,
        you agree to our terms of use &amp; privacy policy.
      </article>
      <article>
        <h3>scepter &amp; sword </h3>
        <p>
          wine <span>co.</span>
        </p>
      </article>
    </div>
  );
};

export default Landing;
