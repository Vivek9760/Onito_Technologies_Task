import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import { useState } from "react";

const Schema = yup.object({
  name: yup.string().required("This field is required"),
  age: yup.string().matches(/^[0-9]*$/, "Invalid Age").required("This field is required"),
  sex: yup.string().required("This field is required"),
  mobile: yup.string().when({
    is: (exists) => exists,
    then: (rule) => rule.phone("In", true, "Invalid Mobile Number")
                        .matches(/^[+0-9]+$/, "Invalid Mobile Number"),
  }),
  aadhar: yup.string().when({
    is: (exists) => exists,
    then: (rule) =>
      rule
        .min(12, "Enter a valid aadhar card number")
        .max(12, "Enter a valid aadhar card number")
        .matches(/^[0-9]+$/, "Enter a valid aadhar card number"),
  }),

  pan: yup.string().when({
    is: (exists) => exists,
    then: (rule) =>
      rule
        .min(10, "Enter a valid pan card number")
        .max(10, "Enter a valid pan card number")
        .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,"Enter a valid pan card number"),
  }),
  guardianName: yup.string(),
  email: yup.string().email("Enter a valid email id"),
  emergencyContact: yup.string().when({
    is: (exists) => exists,
    then: (rule) => rule.phone("In", true, "Invalid Mobile Number")
                         .matches(/^[+0-9]+$/, "Invalid Mobile Number"),
  }),
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pincode: yup.string().when({
    is: (exists) => exists,
    then: (rule) =>
      rule
        .min(6, "Enter a valid 6 digit pincode")
        .max(6, "Enter a valid 6 digit pincode")
        .matches(/^([0-9]+)$/,"Enter a valid 6 digit pincode"),
  }),
  occupation: yup.string(),
  category: yup.string(),
  martialStatus: yup.string(),
  bloodGroup: yup.string(),
  nationality: yup.string(),
});

//Main function Start

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: { country: "India", nationality: "India" },
  });

  const [govtId, setGovtId] = useState("");

  const onSubmit = async (data) => {
    let userData = {...data}
    for(let item in userData)
{
    if(userData[item]==='')
    {
        delete userData[item]
    }
}
    await fetch("http://localhost:5000/users/postData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });
    console.log(userData);
    reset();
    setGovtId('');
  };

  return (
    <Container className="mt-4">
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
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
            <Form.Group as={Col} md={5}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Name<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Col md={9}>
                  <Form.Control type="text" {...register("name")} placeholder="Enter Your Name "/>
                  {errors.name && (
                    <span className="error ps-2">{errors.name.message}</span>
                  )}
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Age<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Col md={9}>
                  <Form.Control type="number" {...register("age")} placeholder="Enter Your Age " />
                  {errors.age && (
                    <span className="error ps-2">{errors.age.message}</span>
                  )}
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
                  <Form.Select {...register("sex")}>
                    <option label="Select Gender" />
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                  </Form.Select>
                  {errors.sex && (
                    <span className="error ps-2">{errors.sex.message}</span>
                  )}
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
                <Col md={7}>
                  <Form.Control type="text" {...register("mobile")} placeholder="Enter Your Mobile Number"/>
                  {errors.mobile && (
                    <span className="error ps-2">{errors.mobile.message}</span>
                  )}
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group as={Col} md={7}>
              <Row>
                <Form.Label as={Col} md={2}>
                  Govt Issued ID
                </Form.Label>
                <Col md={3}>
                  <Form.Select
                    value={govtId}
                    onChange={(e) => {
                      setGovtId(e.target.value);
                     reset({pan:'',aadhar:''});
                    }}
                  >
                    <option label="Select Id" />
                    <option value="pan">Pan Card</option>
                    <option value="aadhar">Aadhar Card </option>
                  </Form.Select>
                </Col>
                {govtId && (
                  <Col md={7} className="pe-5">
                    <Form.Control  placeholder={`Enter Your ${govtId==='pan'?"PAN":"Aadhar"} Card Number`}
                      type="text"
                      {...register(govtId)}
                    />
                    {(govtId === "pan" ? errors.pan : errors.aadhar) && (
                      <span className="error ps-2">
                        {govtId === "pan"
                          ? errors.pan.message
                          : errors.aadhar.message}
                      </span>
                    )}
                  </Col>
                )}
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
                <Form.Label as={Col} md={4}>
                  Guardian Name
                </Form.Label>
                <Col md={7}>
                  <Form.Control type="text" {...register("guardianName")} placeholder="Enter Your Guardian Name" />
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label md={2} as={Col}>
                  Email
                </Form.Label>
                <Col md={10}>
                  <Form.Control type="text" {...register("email")} placeholder="Enter Your Email" />
                  {errors.email && (
                    <span className="error ps-2">{errors.email.message}</span>
                  )}
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group as={Col} md={4}>
              <Row>
                <Form.Label as={Col} md={5}>
                  Emergency Contact Number
                </Form.Label>
                <Col md={6}>
                  <Form.Control type="text" {...register("emergencyContact")} placeholder="Enter Your Contact Number"/>
                  {errors.emergencyContact && (
                    <span className="error ps-2">
                      {errors.emergencyContact.message}
                    </span>
                  )}
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
                <Form.Label as={Col} md={2}>
                  Address
                </Form.Label>
                <Col md={10}>
                  <Form.Control type="text" {...register("address")} placeholder="Enter Your Address"/>
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group className="pe-5" as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>State</Form.Label>
                <Col md={9}>
                  <Form.Control type="text" {...register("state")} placeholder="Enter Your State"/>
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group className="pe-5" as={Col} md={4}>
              <Row>
                <Form.Label as={Col}>City</Form.Label>
                <Col md={10}>
                  <Form.Control type="text" {...register("city")} placeholder="Enter Your City"/>
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
                  <Form.Control type="text" {...register("country")} placeholder="Enter Your Country"/>
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group className="pe-5" as={Col} md={3}>
              <Row>
                <Form.Label as={Col}>Pincode</Form.Label>
                <Col md={8}>
                  <Form.Control type="text" {...register("pincode")} placeholder="Enter Pincode"/>
                  {errors.pincode && (
                    <span className="error ps-2">{errors.pincode.message}</span>
                  )}
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
                <Form.Label as={Col} md={4}>
                  Occupation
                </Form.Label>
                <Col md={8}>
                  <Form.Control type="text" {...register("occupation")} placeholder="Enter Occupation"/>
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 2 */}
            <Form.Group className="ps-5" as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={4}>
                  Category
                </Form.Label>
                <Col md={7}>
                  <Form.Select {...register("category")}>
                    <option label="Select" />
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Col>
              </Row>{" "}
            </Form.Group>

            {/* text-field 3 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={6}>
                  Martial Status
                </Form.Label>
                <Col md={6}>
                  <Form.Select {...register("martialStatus")}>
                    <option label="Select" />
                    <option value="Married">Married</option>
                    <option value="UnMarried">UnMarried</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>

            {/* text-field 4 */}
            <Form.Group as={Col} md={3}>
              <Row>
                <Form.Label as={Col} md={5}>
                  Blood Group
                </Form.Label>
                <Col md={5}>
                  <Form.Select {...register("bloodGroup")}>
                    <option label="Select" />
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
            <Form.Group as={Col} md={4}>
              <Row>
                <Form.Label as={Col} md={3}>Nationality</Form.Label>
                <Col md={8}>
                  <Form.Control type="text" {...register("nationality")} placeholder="Enter Your Nationality"/>
                </Col>
              </Row>
            </Form.Group>
          </Row>
        </Container>
        {/* 4th Section End -  Address Details */}

        {/* Submit & Cancel Buttons */}
        <Container fluid>
          <Row className="mb-3 mt-3 me-5 pe-5 justify-content-end">
            <Col md={1}>
              <Button type="reset" variant="danger">
                Cancel
              </Button>
            </Col>
            <Col md={1}>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Container>
  );
}
