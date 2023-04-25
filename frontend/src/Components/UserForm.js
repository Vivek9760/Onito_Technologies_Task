import { Container, Row, Form, Col, Button } from "react-bootstrap";

export default function UserForm() {
  return (
    <Container fluid className="mt-4 ps-4 pe-4">
      <Form>
        <Container fluid>
          {/* 1st Section -  Personal Details */}

          {/* Row 1 - heading */}
          <Row className="mb-3 mt-3">
            <Col>
              <h5 style={{ textDecoration: "underline" }}>Personal Details</h5>
            </Col>
          </Row>
          {/* Row 1 - End */}

          {/* Row 2 - 3_Text_Fields */}
          <Row className="mb-3 mt-3">
            {/* text-field 1 */}
            <Form.Group  as={Col} md={5}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Name<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Col md={9}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group  as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Age<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Col md={9}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group as={Col} md={4}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Sex<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Col md={9}>
                  <Form.Select>
                    <option />
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
          </Row>
          {/* Row 2 - End */}

          {/* Row 3 - 2_Text_Fields */}
          <Row className="mb-3 mt-3">
            {/* text-field 1 */}
            <Form.Group as={Col} md={5} className="pe-5">
              <Row>
                <Form.Label as={Col} md={2}>
                  Mobile
                </Form.Label>
                <Col md={6}>
                  <Form.Control type="number" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group as={Col} md={7}>
              <Row>
                <Form.Label as={Col} md={2}>Govt Issued ID</Form.Label>
                <Col md={3}>
                  <Form.Select>
                    <option />
                    <option value="pan">Pan Card</option>
                    <option value="aadhar">Aadhar Card </option>
                  </Form.Select>
                </Col>
                <Col md={7} className="pe-5">
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>
          </Row>
          {/* Row 3 - End */}
        </Container>
        {/* 1st Section End -  Personal Details */}

        {/* 2nd Section Start -  Contact Details */}
        <Container fluid>
          {/* Row 1 - heading */}
          <Row className="mb-3 mt-3">
            <Col>
              <h5 style={{ textDecoration: "underline" }}>Contact Details</h5>
            </Col>
          </Row>
          {/* Row 1 - End */}

          {/* Row 2 - 3_Text_Fields */}
          <Row className="mt-3">
            {/* text-field 1 */}
            <Form.Group as={Col} md={5}>
              <Row>
                <Form.Label as={Col} md={3}>Guardian Name</Form.Label>
                <Col md={8}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>Email</Form.Label>
                <Col md={9}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group as={Col} md={4}>
              <Row>
                <Form.Label as={Col} md={5}>Emergency Contact Number</Form.Label>
                <Col md={6}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>
          </Row>
          {/* Row 2 - End */}
        </Container>
        {/* 2nd Section End -  Contact Details */}

        {/* 3rd Section Start - Address Details */}
        <Container fluid>
          {/* Row 1 - heading */}
          <Row className="mb-3 mt-3">
            <Col>
              <h5 style={{ textDecoration: "underline" }}>Address Details</h5>
            </Col>
          </Row>
          {/* Row 1 - End */}

          {/* Row 2 - 3_Text_Fields */}
          <Row className="mt-3">
            {/* text-field 1 */}
            <Form.Group className="pe-5" as={Col} md={5}>
              <Row>
                <Form.Label as={Col}>Address</Form.Label>
                <Col md={10}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group className="pe-5" as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>State</Form.Label>
                <Col md={9}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group className="pe-5" as={Col} md={4}>
              <Row>
                <Form.Label as={Col}>City</Form.Label>
                <Col md={10}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>
          </Row>
          {/* Row 2 - End */}

          {/* Row 3 - 2_Text_Fields */}
          <Row className="mt-3">
            {/* text-field 1 */}
            <Form.Group className="pe-5" as={Col} md={5}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Country
                </Form.Label>
                <Col md={7}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group className="pe-5" as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>Pincode</Form.Label>
                <Col md={8}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>
          </Row>
          {/* Row 3 - End */}
        </Container>
        {/* 3rd Section End -  Address Details */}

        {/* 4th Section Start - Other Details */}
        <Container fluid>
          {/* Row 1 - heading */}
          <Row className="mt-3">
            <Col>
              <h5 style={{ textDecoration: "underline" }}>Other Details</h5>
            </Col>
          </Row>
          {/* Row 1 - End */}

          {/* Row 2 - 4_Text_Fields */}
          <Row className="mt-3">
            {/* text-field 1 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>Occupation</Form.Label>
                <Col md={8}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group className="ps-5" as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={3}>
                  Religion
                </Form.Label>
                <Col md={7}>
                  <Form.Control type="text" />
                </Col>
              </Row>{" "}
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={5}>
                  Martial Status
                </Form.Label>
                <Col md={6}>
                  <Form.Select>
                    <option />
                    <option value="Married">Married</option>
                    <option value="UnMarried">UnMarried</option>
                  </Form.Select>
                </Col>
              </Row>{" "}
            </Form.Group>

            {/* text-field 4 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={5}>Blood Group</Form.Label>
                <Col md={6}>
                  <Form.Select>
                    <option />
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </Form.Select>
                </Col>
              </Row>{" "}
            </Form.Group>
          </Row>
          {/* Row 2 - End */}

          {/* Row 3 - 1_Text_Fields */}
          <Row className="mt-3">

            {/* text-field 1 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>Nationality</Form.Label>
                <Col md={8}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>
          </Row>
        </Container>
        {/* 4th Section End -  Address Details */}

        {/* Submit & Cancel Buttons */}
        <Container fluid>
          <Row className="mb-3 mt-3 me-5 pe-5 justify-content-end">
            <Col md={2}>
              <Button type="reset" className="w-75" variant="danger">Cancel</Button>
            </Col>
            <Col md={2}>
              <Button type="submit" className="w-75" variant="success">Submit</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}
