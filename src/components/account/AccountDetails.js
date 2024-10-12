import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Table, Accordion, Button } from "react-bootstrap";

import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getAccountByAccountNo } from "../../api/user-account";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { userReducer } from "../../context/user/userReducer";
import { useContext } from "../../context";

const AccountDetails = ({ accountNo }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState([]);
  const { userState } = useContext();

  const { user } = userState;

  const navigate = useNavigate();

  useEffect(() => {
    getAccountByAccountNo(accountNo).then((resp) => {
      console.log(resp.data);
      setAccount(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      {!loading && (
        <Row>
          <Col lg={5}>
            <h2 className="text-center">{account.description}</h2>
            <Image src={"/assets/images/accountdetail-img.jpg"} className="img-fluid" />
          </Col>

          <Col lg={5}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Account Details</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th colSpan={2}>
                          <h3>
                            {user.firstName} {user.lastName}
                          </h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Account Number</td>
                        <td>{account.accountNo}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{account.description}</td>
                      </tr>
                      <tr>
                        <td>Balance</td>
                        <td>{account.balance}</td>
                      </tr>
                      <tr>
                        <td>Curreny Code</td>
                        <td>{account.currencyCode}</td>
                      </tr>
                      <tr>
                        <td>Account Type</td>
                        <td>{account.accountType}</td>
                      </tr>
                      <tr>
                        <td>Account Status Type</td>
                        <td>{account.accountStatusType}</td>
                      </tr>
                      <tr>
                        <td>Create Date</td>
                        <td>{account.createdDate}</td>
                      </tr>
                      <tr>
                        <td>Closed Date</td>
                        <td>{account.closedDate}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={2}>
            <Button variant="secondary" className="w-100 mt-3" onClick={() => navigate(-1)}>
              <FiArrowLeft /> Back to accounts
            </Button>
            <Button variant="secondary" className="w-100 mt-3" onClick={() => navigate(`/accountedit/${accountNo}`)}>
              Edit Account <FiArrowRight />
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AccountDetails;
