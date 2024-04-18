import React from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import { Box, Button } from "@mui/material";
import { PlusOneOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useInvoices from "../hooks/useInvoices";

const cols = [
  {
    label: "ID",
    accessor: "id",
  },
  {
    label: "Date",
    accessor: "date",
    transformer: (value) => new Date(parseInt(value)).toLocaleDateString(),
  },
  {
    label: "Invoice Number",
    accessor: "invoiceNumber",
  },
  {
    label: "Customer Name",
    accessor: "customerName",
  },
  {
    label: "Billing Address",
    accessor: "billingAddress",
  },
  {
    label: "Shipping Address",
    accessor: "shippingAddress",
  },
  {
    label: "GSTIN",
    accessor: "gstin",
  },
];

const InvoicePage = () => {
  const { invoices } = useInvoices();
  return (
    <>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Button
          component={Link}
          to="/invoices/0"
          variant="outlined"
          endIcon={<PlusOneOutlined />}
        >
          Add
        </Button>
      </Box>
      <CustomTable rows={invoices} columns={cols} />
    </>
  );
};

export default InvoicePage;
