import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { mockUsers, User } from "../../mockUsers";
import styles from "./styles";

const UserList: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSelectUser = (userId: number) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allUserIds = mockUsers.map((user) => user.id);
      setSelectedUsers(allUserIds);
    } else {
      setSelectedUsers([]);
    }
  };

  const isSelected = (userId: number) => selectedUsers.includes(userId);

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={styles.cell}>
              <Checkbox
                indeterminate={
                  selectedUsers.length > 0 &&
                  selectedUsers.length < mockUsers.length
                }
                checked={selectedUsers.length === mockUsers.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell sx={styles.headerCell}>#</TableCell>
            <TableCell sx={styles.headerCell}>User Name</TableCell>
            <TableCell sx={styles.headerCell}>Contact</TableCell>
            <TableCell sx={styles.headerCell}>Age</TableCell>
            <TableCell sx={styles.headerCell}>Country</TableCell>
            <TableCell sx={styles.headerCell}>Status</TableCell>
            <TableCell sx={styles.headerCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockUsers.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox
                  checked={isSelected(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      marginRight: 1,
                      backgroundColor: "#ffcc80",
                    }}
                  />
                  <Box>
                    <Typography sx={styles.userName}>{user.name}</Typography>
                    <Typography sx={styles.userEmail}>{user.email}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>{user.contact}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.country}</TableCell>
              <TableCell>
                <span style={styles.getStatusStyle(user.status)}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>
                <IconButton sx={styles.iconButton}>
                  <Visibility />
                </IconButton>
                <IconButton sx={styles.editButton}>
                  <Edit />
                </IconButton>
                <IconButton sx={styles.deleteButton}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
