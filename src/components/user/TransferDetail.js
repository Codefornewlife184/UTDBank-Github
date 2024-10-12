import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Spinner, Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getTransferById } from "../../api/transfer-service";
const TransferDetail = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [transfer, setTransfer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getTransferById(id).then((resp) => {
      setTransfer(resp.data);
      setLoading(false);
    });
  }, []);
  console.log(transfer);
  return (
    <Container>
      {!loading && (
        <Row>
          <Col lg={5}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h3>Receipt</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>Sender Account Number</td>
                  <td>{transfer.fromAccountId}</td>
                </tr>
                <tr>
                  <td>Receiver Account Number</td>
                  <td>{transfer.toAccountId}</td>
                </tr>
                <tr>
                  <td>Transaction Date</td>
                  <td>{moment(transfer.transactionDate).format("lll")}</td>
                </tr>
                <tr>
                  <td>Transaction Amount</td>

                  <td>{transfer.transactionAmount}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={2}>
            <Button
              variant="secondary"
              className="w-100 mt-3"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft /> Back to transfers
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default TransferDetail;
