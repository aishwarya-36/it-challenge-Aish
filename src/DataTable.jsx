import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#271d7d",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(friend, availability) {
  return { friend, availability };
}

const rows = [
  createData("Amaal", "Week 3"),
  createData("Paul", "Week 5"),
  createData("Kelvin", "Week 4"),
  createData("Adrian", "This Week"),
  createData("Jessica", "Week 5"),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: "bold" }}>
              Friends
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: "bold" }}>
              Availability
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: "bold" }}>
              Action Options
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.friend}>
              <StyledTableCell component="th" scope="row">
                <AccountCircleIcon /> {row.friend}
              </StyledTableCell>
              <StyledTableCell>{row.availability}</StyledTableCell>
              <StyledTableCell>
                <IconButton aria-label="Visibility">
                  <VisibilityIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton aria-label="Telegram">
                  <TelegramIcon />
                </IconButton>
                <IconButton aria-label="Mail">
                  <MailOutlineIcon />
                </IconButton>
                <IconButton aria-label="Remove">
                  <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
                <IconButton aria-label="Remove">
                  <PersonRemoveAlt1Icon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
