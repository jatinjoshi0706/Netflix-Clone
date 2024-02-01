import React, { useState } from 'react'
import styled from "styled-components"
import BackgroundImg from '../Components/BackgroundImg';
import Header from '../Components/Header';
import {  createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase_config";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleSignIn = async () => {
    try{
      const {email,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }catch(err){
      console.log(err);
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser) =>{
    if(currentUser) navigate("/");
  });
  
  return (
    <Container showPassword={showPassword}>
      <BackgroundImg />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1 >Unlimited movies, TV shows more</h1>
            <h4>Watch Anywhere. Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your membership.
            </h6>
            <div className='form' >
              <input type='email' placeholder='Email address' name='email' value={formValues.email} onChange={(e) => setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })} required></input>
              {showPassword && (
                <input type='password' name='password' placeholder='Password' value={formValues.password} onChange={(e) => setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })} required></input>
              )}
              {!showPassword && (
                <button onClick={() => setShowPassword(true)}>Get Started</button>
              )}
            </div>
            <button className='signupbtn'onClick={handleSignIn}>Sign up</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 2fr"};
        width: 60%;
        margin:auto;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        background-color: #e50914;
        transition: all 0.3s ease-in-out;
        border: none;
        width:30%;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
        justify-content:center;

      }
      button .signbtn{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        width:30%;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`; export default Signup

