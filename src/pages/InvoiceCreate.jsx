import React from "react";
import Form from "../components/Form/Form";
import useInvoices from "../hooks/useInvoices";

const InvoiceCreatePage = () => {
  const { addInvoice } = useInvoices();

  const handleCreateInvoice = (values, { setSubmitting }) => {
    addInvoice(values);
    setSubmitting(false);
  };

  return <Form onSubmit={handleCreateInvoice} />;
};

export default InvoiceCreatePage;
