import React from "react";
import Form from "../components/Form/Form";
import { useParams } from "react-router";
import useInvoices from "../hooks/useInvoices";

const InvoiceUpdatePage = () => {
  const { id } = useParams();
  const { setInvoice, invoice } = useInvoices(id);

  const handleUpdateInvoice = (values, { setSubmitting }) => {
    setInvoice(values);
    setSubmitting(false);
  };

  return (
    <Form initialValues={invoice} onSubmit={handleUpdateInvoice} isUpdating />
  );
};

export default InvoiceUpdatePage;
