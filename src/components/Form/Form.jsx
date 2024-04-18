import React from "react";
import { FieldArray, Formik } from "formik";
import { Button, TextField, Container, Box, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const defaultItem = {
  id: "",
  itemName: "",
  quantity: "",
  price: "",
  amount: "",
};

const defaultInvoice = {
  id: "",
  date: null,
  invoiceNumber: "",
  customerName: "",
  billingAddress: "",
  shippingAddress: "",
  gstin: "",
  items: [defaultItem],
  billSundrys: [],
  totalAmount: [],
};

function Form({ isUpdating, initialValues = defaultInvoice, onSubmit }) {
  return (
    <Container sx={{ width: 600 }} maxWidth="sm">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="date"
                  label={"Date"}
                  onChange={(val) => {
                    // handleChange(val.format("DD/MM/YYYY"));
                    setFieldValue("date", val.format());
                  }}
                  onBlur={handleBlur}
                  value={values.date ? dayjs(values.date) : null}
                  error={touched.date && !!errors.date}
                  helperText={errors.date}
                />
              </LocalizationProvider>
              <TextField
                label="Invoice Number"
                name="invoiceNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.invoiceNumber}
                error={touched.invoiceNumber && !!errors.invoiceNumber}
                helperText={errors.invoiceNumber}
              />
              <TextField
                label="Customer Name"
                name="customerName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.customerName}
                error={touched.customerName && !!errors.customerName}
                helperText={errors.customerName}
              />
              <TextField
                label="Billing Address"
                name="billingAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.billingAddress}
                error={touched.billingAddress && !!errors.billingAddress}
                helperText={errors.billingAddress}
              />
              <TextField
                label="Shipping Address"
                name="shippingAddress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.shippingAddress}
                error={touched.shippingAddress && !!errors.shippingAddress}
                helperText={errors.shippingAddress}
              />
              <TextField
                label="GSTIN"
                name="gstin"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gstin}
                error={touched.gstin && !!errors.gstin}
                helperText={errors.gstin}
              />
              <FieldArray name="items">
                {({ push, remove }) => (
                  <>
                    {Object.keys(values.items).map((index) => {
                      const item = values.items[index] ?? {};
                      console.log(item);
                      return (
                        <Box
                          sx={{
                            padding: 2,
                            paddingLeft: 0,
                            display: "flex",
                            gap: 2,
                            flexWrap: "wrap",
                          }}
                          key={item.id}
                        >
                          <TextField
                            label="Item Name"
                            name={`items.${index}.itemName`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={item?.itemName}
                            error={
                              touched.items?.[index]?.itemName &&
                              !!errors.items?.[index]?.itemName
                            }
                            helperText={errors.items?.[index]?.itemName}
                          />
                          <TextField
                            label="Quantity"
                            type="number"
                            name={`items.${index}.quantity`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.items[index].quantity}
                            error={
                              touched.items?.[index]?.quantity &&
                              !!errors.items?.[index]?.quantity
                            }
                            helperText={errors.items?.[index]?.quantity}
                          />
                          <TextField
                            label="Price"
                            type="number"
                            name={`items.${index}.price`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.items[index].price}
                            error={
                              touched.items?.[index]?.price &&
                              !!errors.items?.[index]?.price
                            }
                            helperText={errors.items?.[index]?.price}
                          />
                          <TextField
                            label="Amount"
                            type="number"
                            name={`items.${index}.amount`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.items?.[index]?.amount}
                            error={
                              touched.items?.[index]?.amount &&
                              !!errors.items?.[index]?.amount
                            }
                            helperText={errors.items?.[index]?.amount}
                          />
                        </Box>
                      );
                    })}
                    <Button
                      onClick={() => {
                        push(defaultItem);
                      }}
                    >
                      Add Invoice Item
                    </Button>
                  </>
                )}
              </FieldArray>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Box>
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(values, null, 2)}
            </pre>
            {/* <pre>{JSON.stringify(initialValues, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Form;
