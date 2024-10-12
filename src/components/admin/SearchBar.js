import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup, Container } from "react-bootstrap";
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
    navigate(`/admin/users/${userId}`);
  };

  useEffect(() => {
    getUsers().then((resp) => {
      setUsers(resp.data);
      setLoadingUsers(false);
    });
  }, []);

  return (

    <Container>
      

      <div className="SearchBar" >

      {/* <ButtonGroup className="searchbar-button" aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/users/new">
          New User
        </Button>
      </ButtonGroup>
 */}
  

        <input
          type="search"
          placeholder="Search ... "
          onChange={(event) => {
          setSearchTerm(event.target.value);
          }}
        />
        
      </div>
        <Table striped bordered hover responsive className="admin-list mt-3">
          <thead>
            <tr>
              <th>#</th>
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
                return "";
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
      
      <ButtonGroup className="searchbar-button" aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/users/new">
          New User
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default SearchBar;
