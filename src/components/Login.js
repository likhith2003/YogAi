import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './SignImg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const history = useNavigate();  //useNavigate is a react hook.

    const [inpval, setInpval] = useState({
        Email_Id: "",
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

        const getuserArr = localStorage.getItem("useryoutube")
        console.log(getuserArr)

        //console.log(inpval);
        const { Email_Id, password } = inpval;

        if (Email_Id === "") {
            alert("Email field is required !")
        }
        else if (!Email_Id.includes("@")) {
            alert("Email Address not valid! Please enter valid Email Address.")
        }
        else if (password === "") {
            alert("Password field is required")
        }
        else if (password.length <= 8) {
            alert("Password length should be greater than 8")
        }
        else {
            // localStorage.setItem("useryoutube", JSON.stringify([...data, inpval])); ye wala line of code sign up page mein run ho rha hai
            //jo bhi data hai, usko JSON ke format mein store krwayenge
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);  //user data is an array of an object. Go to web page and inspect over there.
                // console.log(userdata)
                // in the  line below, el= element and k=index number
                const userlogin = userdata.filter((el, k) => {
                    return el.Email_Id === Email_Id && el.password === password
                });
                console.log(userlogin)   //if we enter an username and password which is already associated with an account on the website, this line prints 
                // the other details such as first_name, Last_name.
                // However, if there is no account with those credentials, the above line prints an empty array.

                if (userlogin.length === 0) {
                    alert("Invalid Details !")
                } else {
                    console.log("User Login Successul !")
                    history("/Start")        //if details entered are correct, re-direct the user to start page after clicking on the submit button
                }
            }
        }
    }

    return (
        <>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <SignImg />
                    <div className="right_data mt-5 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6' style={{ color: "purple" }}>Log In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" name='Email_Id' onChange={getdata} placeholder="Email Id" />
                                <Form.Text className="text-muted">
                                    {/* //We'll never share your email with anyone else. */}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
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