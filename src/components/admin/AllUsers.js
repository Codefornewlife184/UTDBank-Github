import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../api/admin-user-service";

const AllUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const showDetails = (userId) => {
    navigate(`/admin/user-accounts/${userId}/auth`);
  };

  useEffect(() => {
    getUsers().then((resp) => {
      setUsers(resp.data);
      setLoading(false);
    });
  }, []);
  console.log(users);
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>SSN</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>address</th>
          <th>mobilePhoneNumber</th>
          <th>Email</th>
          <th>createdDate</th>
          <th>roles</th>
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
        {users.map((item, index) => (
          <tr
            key={index}
            onClick={() => showDetails(item.id)}
            className="cursor-hand"
          >
            <td>{index + 1}</td>
            <td>{item.ssn}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.address}</td>
            <td>{item.mobilePhoneNumber}</td>
            <td>{item.email}</td>
            <td>{moment(item.modInfId.createdDate).format("lll")}</td>
            <td>{item.roles}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllUsers;
