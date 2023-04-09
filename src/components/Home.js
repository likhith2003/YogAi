import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './SignImg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../assets/BaseUrl'

const Home = () => {

    const history = useNavigate();  //useNavigate is a react hook.
    const [inpval, setInpval] = useState({
        First_name: "",
        Last_name: "",
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);

    // console.log(inpval)
    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target; // we are doing object destructuring over here.
        // console.log(value,name);

        setInpval(() => {
            return { 
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        // CAN be replaced wirth regex expressions

        const { First_name, Last_name, email, password } = inpval;
        if (First_name === "") {
            alert("First Name field is required !")
        }
        else if (email === "") {
            alert("Email field is required !")
        }
        else if (!email.includes("@")) {
            alert("Email Address not valid! Please enter valid Email Address.")
        }
        else if (password === "") {
            alert("Password field is required")
        }
        else if (password.length <= 8) {
            alert("Password length should be greater than 8")
        }
        else { 

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: JSON.stringify({
                email: email,
                password :password,
                lastname:Last_name,
                firstname:First_name
              }),
              redirect: 'follow'
            };

            fetch(baseUrl+"/", requestOptions)
              .then(response => response.json())
              .then((res) => {
                if(res?.token){
                     history("/start");
                     localStorage.setItem("user", JSON.stringify({...{
                        email: email,
                        password :password,
                    }, token:res.token}));   
                     //jo bhi data hai, usko JSON ke format mein store krwayenge
                   } 
            })
            .catch(error => {console.log('error', error);alert("User not logged in");});
        }
    }

    return (
        <>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <SignImg />
                    <div className="right_data mt-5 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6' style={{ color: "purple" }}>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='First_name' onChange={getdata} placeholder="First name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='Last_name' onChange={getdata} placeholder="Last name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Email Id" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='User name' onChange={getdata} placeholder="User name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-6' style={{ background: "purple" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already have an account?<span> <NavLink to={"login"}> Log In</NavLink></span></p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home