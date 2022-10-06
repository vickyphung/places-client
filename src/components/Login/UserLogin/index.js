import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";


export default function Login() {

  const navigate = useNavigate();


  const [loginFormData, setLoginFormData] = useState({
    loginName: "",
    loginPassword: "",
  });

  const onSubmit = async () => {
    const response = await axios.post(`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/user/login`, {
        name: loginFormData.loginName,
        password: loginFormData.loginPassword
  })
        console.log(response);
        localStorage.setItem("jwtToken", response.data.jwtToken);
    navigate("/user");
  
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="loginname">Name</FormLabel>
          <Input
            name="loginName"
            id="loginName"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.loginName && errors.loginName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.loginPassword}>
          <FormLabel htmlFor="loginPassword">Password</FormLabel>
          <Input type="loginPassword" name="loginPassword" id="loginPassword" />
          <FormErrorMessage>
            {errors.loginPassword && errors.loginPassword.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
