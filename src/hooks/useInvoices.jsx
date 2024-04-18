import { useContext, useEffect } from "react";
import { InvoiceContext } from "../contexts/InvoiceContext";

const useInvoices = (id = "") => {
  const { invoices = [], setInvoices } = useContext(InvoiceContext);

  const setInvoiceFactory = (id) => {
    return (updatedInvoice) => {
      console.log(invoices, updatedInvoice);
      setInvoices((oldInvoices) =>
        oldInvoices.map((invoice) =>
          invoice.id === id ? updatedInvoice : invoice
        )
      );
    };
  };

  if (id)
    return {
      invoice: invoices.find((invoice) => invoice.id === id),
      setInvoice: setInvoiceFactory(id),
    };

  return {
    invoices,
    addInvoice: (invoice) => setInvoices((old) => [...old, invoice]),
  };
};

export default useInvoices;
