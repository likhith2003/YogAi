import React from 'react'
import '../style/MainPage.css'

const SignImg = () =>{
    return(
            <>
            <div className="left_data mt-5" style={{width:"100%"}}>
            <h2 className="header mt-3" style={{color:'purple',textAlign:'center'} }>Welcome to AiYogi</h2>
                        <div className="box2">
                            <img src="https://i.pinimg.com/originals/24/a7/9a/24a79a561e11c22ad4ed03299420402e.jpg" style={{maxWidth:480}} alt="" className="rounded-circle"/>
                        </div>
                    </div>
            </>
    )
}

export default SignImg