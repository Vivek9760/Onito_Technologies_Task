import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function UsersData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    try {
      let res = await fetch("http://localhost:5000/users/getData");
      res = await res.json();
      setData(res);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Container fluid className="mt-4">
      <Table responsive="md" style={{textAlign:"center"}} striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>GovtID <br /> (Pan/Aadhar Card)</th>
            <th>Guardian Name</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((user,index)=>
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{`${user.age}Y/${user.sex}`}</td>
              <td>{user.mobile?user.mobile:"..."}</td>
              <td>{user.address?user.address:"..."}</td>
              <td>{user.pan?user.pan:(user.aadhar?user.aadhar:"...")}</td>
              <td>{user.guardianName?user.guardianName:"..."}</td>
              <td>{user.nationality}</td>
            </tr>
          )
          }
        </tbody>
      </Table>
    </Container>
  );
}
