import React, { useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const CustomTable = ({ rows, columns }) => {
  const headers = useMemo(() => {
    return columns.map((col) => col.label || "");
  }, [columns]);

  return (
    <TableContainer component={Paper}>
      <Table component="div" sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead component="div">
          <TableRow component="div">
            {headers.map((header) => (
              <TableCell component="span" key={header}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody component="div">
          {rows.map((row) => (
            <TableRow
              component={Link}
              to={`/invoices/${row.id}`}
              key={JSON.stringify(row)}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((col) => (
                <TableCell
                  component="span"
                  key={col.header}
                  align={col.alignment ?? "center"}
                >
                  {col.transformer
                    ? col.transformer(row[col.accessor])
                    : row[col.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
