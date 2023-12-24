import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

const FormRegister = () => {
  return (
    <div>
       <form action="">
        <InputForm label="Full Name" type="text" placeholder="Insert your Full Name" name="fullname"/>
        <InputForm label="Email" type="email" placeholder="halo@mail.com" name="email"/>
        <InputForm label="Passowrd" type="password" placeholder="********" name="password"/>
        <InputForm label="Confirm Password" type="password" placeholder="********" name="confirmPassword"/>
        <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    </div>
  )
}

export default FormRegister
