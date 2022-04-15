import { useState } from "react";
// ------- Components
import FormInput from "../FormInput/FormInput";
import { SignButton } from "../Buttons/Buttons";

// ------- Firebase
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../firebase/firebase.utils";

// ------ Redux
import { setIsLoggedIn } from "../../app/user/userSlice";
import { useDispatch } from "react-redux";

// ------- Styles
import { ButtonsContainer } from "./SignInForm.style";
import { SignContainer, Title, Span } from "../../styles/CommonStyles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    dispatch(setIsLoggedIn(true));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      dispatch(setIsLoggedIn(true));

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignContainer>
      <Title>I already have an account?</Title>
      <Span>Sign in with your email and password</Span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <ButtonsContainer>
          <SignButton type='submit'>Sign In</SignButton>
          <SignButton
            buttonType='google'
            onClick={signInWithGoogle}
            type='button'>
            Sign In With Google
          </SignButton>
        </ButtonsContainer>
      </form>
    </SignContainer>
  );
};

export default SignInForm;
