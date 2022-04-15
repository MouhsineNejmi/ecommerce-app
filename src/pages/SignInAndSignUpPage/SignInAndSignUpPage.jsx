import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// ------- Components
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// ------- Styles
import { SignInAndSignUpPageContainer } from "./SignInAndSignUp.style";

const SignInAndSignUpPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <SignInAndSignUpPageContainer>
      <SignInForm />
      <SignUpForm />
    </SignInAndSignUpPageContainer>
  );
};

export default SignInAndSignUpPage;
