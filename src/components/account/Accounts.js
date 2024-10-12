import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Image, Table, Spinner, Container, NavItem,Col,Button } from "react-bootstrap";
import { getAccounts } from "../../api/user-account";
import AccountCard from "../user/AccountCard";


const Accounts = () => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();

  const showDetails = (accountNo) => {
    navigate(`/account/${accountNo}`);
  };

  const navigateToNewAccount=()=>{
    navigate("/user/newaccount")
  }

  useEffect(() => {
    getAccounts().then((resp) => {
      console.log(resp.data);
      setAccount(resp.data);
      setLoading(false);
    });
  }, []);

  return (

    <div> 
      <div style={{position:"relative"}}>
      <Col style={{margin:"1rem", position:"absolute", right:"1rem", bottom:"1rem"}}>
      <Button variant="danger" type="submit" onClick={navigateToNewAccount}> Create a New Account
      </Button>
      </Col>
      </div>
      <div style={{flexWrap:"wrap"}}>
        {account.map((item, index)=>(
          <Col style={{margin:"1rem"}}>
            <AccountCard
            key= {index + 1}
            accountType={item.accountType}
            accountNo= {item.accountNo}
            balance={item.balance}
            accountCurrency={item.currencyCode}
            />
          </Col>

        )
        )}
      </div>
    </div>


   /*{ <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Account Number</th>
            <th>Decsription</th>
            <th>Balance</th>
            <th>Currency Code</th>
            <th>Account Type</th>
            <th>Account Status Type</th>
            <th>Created Date</th>
            <th>Closed Date</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={7}>
                <Spinner animation="border" size="sm" /> Loading...
              </td>
            </tr>
          )}
          {account.map((item, index) => (
            <tr key={index} onClick={() => showDetails(item.accountNo)} className="cursor-hand">
              <td>{index + 1}</td>
              <td>{item.accountNo}</td>
              <td>{item.description}</td>
              <td>{item.balance}</td>
              <td>{item.currencyCode}</td>
              <td>{item.accountType}</td>
              <td>{item.accountStatusType}</td>
              <td>
                {item.createdDate}
                <br />
                {moment(item.createdDate).format("lll")}
              </td>
              <td>
                {" "}
                {item.closedDate}
                <br />
                {moment(item.closedDate).format("lll")}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>}*/
  );
};

export default Accounts;
