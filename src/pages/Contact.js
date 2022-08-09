import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import professions from "../professions";
import { Typeahead } from "react-bootstrap-typeahead";
import { ContactC } from "../components/styles/ContactC.styles";
import "./Contact.scss";

function Contact() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const calcAge = (dateString) => {
  //   const today = new Date();
  //   const birthDate = new Date(dateString);
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   return age;
  // };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { dob, gender, cities, prof, bio } = form;
    const newErrors = {};

    if (!dob || dob === "") newErrors.dob = "Please enter your date of birth";
    // else if (calcAge(age) < 18)
      // newErrors.dob = "You need to be atleast 18 years old";

    if (!gender || gender === "") newErrors.gender = "Please enter your gender";
    // newErrors.gender = "Gender is invalid!";

    if (!cities || cities === "") newErrors.cities = "Please select your city";
    // newErrors.cities = "City is invalid!";

    if (!prof || prof === "") newErrors.prof = "Please enter your profession";
    // newErrors.prof = "Gender is invalid!";

    if (!bio || bio === "") newErrors.bio = "Please enter a comment ";
    // newErrors.bio = "Bio is invalid!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form-submitted");
      console.log(form);
    }
  };

  return (
    <ContactC>
      <Form>
        <h2>Contact us with this form!</h2>
        <Form>
          <Form.Group controlId="dob" className="form-wrapper">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date of birth"
              value={form.dob}
              onChange={(e) => setField("dob", e.target.value)}
              isInvalid={errors.dob}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.dob}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="gender" className="form-wrapper">
            <Form.Select
              value={form.gender}
              isInvalid={errors.gender}
              onChange={(e) => {
                setField("gender", e.target.value);
              }}
              placeholder="Select Gender"
            >
              <option>Select gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="cities" className="form-wrapper">
            <Form.Select
              value={form.cities}
              isInvalid={errors.cities}
              onChange={(e) => {
                setField("cities", e.target.value);
              }}
              placeholder="Cities"
            >
              <option>Cities</option>
              <option value="1">Drenas</option>
              <option value="2">Prishtine</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.cities}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="prof" className="form-wrapper">
            <Form.Label>Professions</Form.Label>
            <Typeahead
              id="prof"
              name="prof"
              onChange={(selected) => {
                console.log(selected);
                console.log("get value out", selected[0]);
                setField("prof", selected && selected[0]);
              }}
              className={errors.prof && "red-border"}
              inputProps={{ required: true }}
              placeholder="Chose a profession..."
              options={professions}
            />
            <div className="red">{errors.prof}</div>
          </Form.Group>
          <Form.Group controlId="bio" className="form-wrapper">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              type="textarea"
              placeholder="Enter your short decription / comment"
              value={form.bio}
              isInvalid={errors.bio}
              onChange={(e) => setField("bio", e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.bio}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="submit" className="form-wrapper">
            <Button
              type="submit"
              className="my-2"
              variant="primary"
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Form.Group>
        </Form>
      </Form>
    </ContactC>
  );
}

export default Contact;
