import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './SignImg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../assets/BaseUrl'

const Login = () => {

    const history = useNavigate();  //useNavigate is a react hook.

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    // console.log("Input val",inpval)
    const getdata = (e) => {
        //console.log(e.target.value);
        const { value, name } = e.target; // we are doing object destructuring over here.
        // we can also write const value=e.target.value (in place of the above line)
        //console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();
        const getuserArr=JSON.parse(localStorage.getItem("user"))
        if(getuserArr?.token){
            history("/start")
        }
        console.log(getuserArr)

        //console.log(inpval);
        const { email, password } = inpval;

        ///replace lower if else cases with regex expression 
        if (email === "") {
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
                    password: password
                }),
                redirect: 'follow'
            };
            fetch(baseUrl + "/login", requestOptions)
                .then((response) => response.json())
                .then((res) => {
                    if (res?.token) {
                        localStorage.setItem("user", JSON.stringify({...{
                            email: email,
                            password :password,
                        }, token:res.token}));  
                        history("/start");
                    }
                })
                .catch(error =>{ 
                    alert("Invalid Credentials")
                    console.log('error', error)}
                );
        }
    }

    //GET and POST method for HTTP requests.
    //GET is used to request data from a specified resource.
    //POST is used to send data to a server to create/update a resource.

    return (
        <>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <SignImg />
                    <div className="right_data mt-5 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6' style={{ color: "purple" }}>Log In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Email Id" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-6' style={{ background: "purple" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't have an account?<span> <NavLink to={"/"}>Sign Up</NavLink></span></p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login