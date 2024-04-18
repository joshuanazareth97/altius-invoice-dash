export interface Invoice {
  id: string;
  date: string;
  invoiceNumber: number;
  customerName: string;
  billingAddress: string;
  shippingAddress: string;
  gstin: string;
  items: InvoiceItem[];
  billSundrys: InvoiceBillSundry[];
  totalAmount: number;
}

export interface InvoiceItem {
  id: string;
  itemName: string;
  quantity: number;
  price: number;
  amount: number;
}

export interface InvoiceBillSundry {
  id: string;
  billSundryName: string;
  amount: string;
}
