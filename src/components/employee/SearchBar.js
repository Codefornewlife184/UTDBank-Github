import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { downloadUsers, getUsers } from "../../api/admin-user-service";

const SearchBar = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [downloadingUsers, setDownloadingUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDownload = () => {
    setDownloadingUsers(true);
    downloadUsers().then((resp) => {
      console.log(resp.data);

      setDownloadingUsers(false);
    });
  };

  const handleEdit = (userId) => {
    navigate(`/employee/users/${userId}`);
  };

  useEffect(() => {
    getUsers().then((resp) => {
      setUsers(resp.data);
      setLoadingUsers(false);
    });
  }, []);

  return (
    <>
      {/*   <ButtonGroup className="searchbar-button" aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/users/new">
          New User
        </Button>
      </ButtonGroup> */}

      <div className="SearchBar">
        <input
          type="search"
          placeholder="Please enter name, surname, user id or mail"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <Table striped bordered hover responsive className="admin-list mt-3">
          <thead>
            <tr>
              <th></th>
              <th>SSN</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Id</th>
              <th>Email</th>
              <th>Roles</th>
            </tr>
          </thead>

          {users
            .filter((value) => {
              if (searchTerm == "") {
                return;
              } else if (
                value.firstName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                value.lastName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                value.id.toString().match(searchTerm.toString()) ||
                value.ssn.toString().match(searchTerm.toString()) ||
                value.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.roles.toString().toLowerCase() ===
                  searchTerm.toLowerCase()
              ) {
                return value;
              }
            })
            .map((value, key) => {
              return (
                <tbody>
                  <tr
                    key={key}
                    onClick={() => handleEdit(value.id)}
                    className="cursor-hand"
                  >
                    <td>{key + 1}</td>
                    <td>{value.ssn}</td>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.id}</td>
                    <td>{value.email}</td>
                    <td>{value.roles.join(" ")}</td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
      </div>
    </>
  );
};

export default SearchBar;
