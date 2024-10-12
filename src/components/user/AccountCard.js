import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import { FiArrowRight,FiArchive } from "react-icons/fi";

const AccountCard = (props) => {

    return (
        <div >
            <div className="card">
                <div className="card-body" style={{position:"relative"}}>
                    <h5 className="card-title">{props.accountType}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.accountNo}</h6>
                    <p className="card-text">Balance: {props.balance + " " + props.accountCurrency} </p>
                    <div style={{height: "1rem"}}></div>
                    <Link to={`/account/${props.accountNo}`} style={{margin:"3px",color:"black"}}> <FiArchive/>  &nbsp; Account Details</Link>
                    <div style= {{position:"absolute" , right:"10px", bottom:"5px"}}>
                    <Link to={`/Transfers/${props.accountNo}`} style={{margin:"3px",color:"black"}}> <FiArchive/>  &nbsp; Account Activities</Link>
                    <Link to={`/CreateTransfer/${props.accountNo}/${props.accountCurrency}`} style={{margin:"3px",color:"black"}}> <FiArrowRight/>  &nbsp; Make a Transfer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountCard
