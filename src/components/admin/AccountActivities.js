import moment from "moment";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Table, Spinner, Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getTransfersByAccountNo } from "../../api/admin-transfer-service";

const AccountActivities = ({ accountNo }) => {
  const [loading, setLoading] = useState(true);
  const [activities, setAccountsActivities] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getTransfersByAccountNo(accountNo).then((resp) => {
      setAccountsActivities(resp.data);
      setLoading(false);
    });
  }, []);
  console.log(activities);
  return (
    <Container>
      <Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Account No</th>
              <th>To Account No</th>
              <th>Transaction Amount</th>
              <th>Transaction Date</th>
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
            {activities.map((item, index) => (
              <tr key={index} className="cursor-hand">
                <td>{index + 1}</td>
                <td>{item.fromAccountId}</td>
                <td>{item.toAccountId}</td>
                <td>{item.transactionAmount}</td>
                <td>{moment(item.transactionDate).format("lll")}</td>
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
            <FiArrowLeft /> Back to Accounts
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountActivities;
