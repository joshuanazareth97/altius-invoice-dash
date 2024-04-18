import React, { useState } from "react";
import "./App.css";
import Drawer from "@mui/material/Drawer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Toolbar from "./components/Navbar/Navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InvoicePage from "./pages/InvoicePage";
import InvoiceCreatePage from "./pages/InvoiceCreate";
import InvoiceUpdatePage from "./pages/InvoiceUpdate";
import { InvoiceProvider } from "./contexts/InvoiceContext";

/*
TODO:
- Nav + toolbar X
- Invoice dash x
- Invoice form - create
- Invoice form - update
- Validations
*/

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Toolbar onMenuOpen={() => setMenuOpen(true)} />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List>
          {["Invoices"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to="/invoices">
                <ListItemIcon>I</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <InvoiceProvider>
        <Routes>
          <Route path="/" element={<p>Test</p>} />
          <Route path="/invoices" Component={InvoicePage} />
          <Route path="/invoices/0" Component={InvoiceCreatePage} />
          <Route path="/invoices/:id" Component={InvoiceUpdatePage} />
        </Routes>
      </InvoiceProvider>
    </BrowserRouter>
  );
}

export default App;
