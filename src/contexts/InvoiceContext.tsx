import React, { useState } from "react";
import { Invoice, InvoiceItem } from "../interfaces/invoice";

const dummyItem: InvoiceItem = {
  id: "",
  itemName: "",
  quantity: 100,
  price: 24,
  amount: 2400,
};

const dummyInvoices: Invoice[] = [
  {
    id: "1",
    date: "1713438603633",
    invoiceNumber: 0,
    customerName: "Joshua",
    billingAddress: "34, Mumbai",
    shippingAddress: "34, Mumbai",
    gstin: "9999",
    items: [dummyItem],
    billSundrys: [],
    totalAmount: 999,
  },
  // {},
];

export const InvoiceContext = React.createContext({});

export const InvoiceProvider = ({ children }: React.PropsWithChildren) => {
  const [invoices, setInvoices] = useState<Invoice[]>(dummyInvoices);
  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};
