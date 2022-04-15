import { useState } from "react";

// ------- Components
import FormInput from "../FormInput/FormInput";
import { SignButton } from "../Buttons/Buttons";

// ------- Firebase
import { AuthErrorCodes } from "firebase/auth";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.utils";

// ------- Redux
import { setIsLoggedIn } from "../../app/user/userSlice";
import { useDispatch } from "react-redux";

// ------- Styles
import { SignContainer, Title, Span } from "../../styles/CommonStyles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      dispatch(setIsLoggedIn(true));

      resetFormFields();
    } catch (error) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignContainer>
      <Title>Don't have an account?</Title>
      <Span>Sign up with your email and password</Span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <SignButton type='submit'>Sign Up</SignButton>
      </form>
    </SignContainer>
  );
};

export default SignUpForm;
