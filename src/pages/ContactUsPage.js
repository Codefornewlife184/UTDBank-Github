import React from "react";
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contact/ContactForm";
import PageHeader from "../components/common/PageHeader";
const ContactUs = () => {
  return (
    <>
      <PageHeader title="Contact Us" image="contact-us-bg.png" />
      <Contact />
      <ContactForm subtitle="Do you have any question?" buttonmessage="Submit A Question" />
    </>
  );
};

export default ContactUs;
