import moment from "moment";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Table, Spinner, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { getAccountsByUserId } from "../../api/account-service";
const AccountsByUser = ({ userId }) => {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccountsByUserId] = useState([]);
  const navigate = useNavigate();

  const showDetails = (accountNo) => {
    navigate(`/transfer/${accountNo}/accountNo/auth`);
  };
  useEffect(() => {
    getAccountsByUserId(userId).then((resp) => {
      setAccountsByUserId(resp.data);
      setLoading(false);
    });
  }, []);
  console.log(accounts);
  return (
    <Container>
      <Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>accountNo</th>
              <th>balance</th>
              <th>currencyCode</th>
              <th>accountType</th>
              <th>accountStatusType</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5}>
                  <Spinner animation="border" size="sm" /> Loading...
                </td>
              </tr>
            )}
            {accounts.map((item, index) => (
              <tr
                key={index}
                onClick={() => showDetails(item.accountNo)}
                className="cursor-hand"
              >
                <td>{index + 1}</td>
                <td>{item.accountNo}</td>
                <td>{item.balance}</td>
                <td>{item.currencyCode}</td>
                <td>{item.accountType}</td>
                <td>{item.accountStatusType}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col lg={2}>
          <Button
            variant="secondary"
            className="w-100 mt-3"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft /> Back to Users
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default AccountsByUser;
