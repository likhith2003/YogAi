import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignImg from './SignImg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    
    const history = useNavigate();  //useNavigate is a react hook.
    const [inpval,setInpval] = useState({
         First_name:"",
         Last_name:"",
         Email_Id:"",
         password:""
    })

    const [data,setData]= useState([]);

     //console.log(inpval)
    const getdata = (e) =>{
        //console.log(e.target.value);

        const {value,name} =e.target; // we are doing object destructuring over here.
        //console.log(value,name);

        setInpval(()=>{
               return{
                ...inpval,
                [name]:value
               }

        })

    }
     
    const addData = (e)=>{
        e.preventDefault();

        //console.log(inpval);
        const {First_name, Last_name,Email_Id, password} = inpval;
        if(First_name ===""){
           alert("First Name field is required !")
        }
        else if(Email_Id === "")
        {
            alert("Email field is required !")
        }
        else if(!Email_Id.includes("@")){
            alert("Email Address not valid! Please enter valid Email Address.")
        }
        else if(password === ""){
            alert("Password field is required")
        }
        else if(password.length <= 8){
            alert("Password length should be greater than 8")
        }
        else{
           localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));   //jo bhi data hai, usko JSON ke format mein store krwayenge
           history("/Start")
        }
    }

    return (
        <>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                <SignImg />
                    <div className="right_data mt-5 p-3" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6' style={{color:"purple"}}>Sign Up</h3>
                        <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='First_name' onChange={getdata} placeholder="First name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='Last_name' onChange={getdata} placeholder="Last name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" name='Email_Id' onChange={getdata} placeholder="Email Id" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                            
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='User name' onChange={getdata} placeholder="User name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                {/* <Form.Check type="checkbox" label="Check me out" /> */}
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData} className='col-lg-6' style={{background:"purple"}}>
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