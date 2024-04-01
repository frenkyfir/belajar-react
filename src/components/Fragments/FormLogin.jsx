import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="halo@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
        />
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    </div>
  );
};

export default FormLogin;
