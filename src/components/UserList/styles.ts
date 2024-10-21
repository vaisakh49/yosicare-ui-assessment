import { CSSProperties } from "react";

const styles = {
  cell: {
    backgroundColor: "#f5f5f5",
  },
  headerCell: {
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
  },
  userName: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  userEmail: {
    fontSize: "12px",
    color: "#888",
  },
  iconButton: {
    color: "#9e9e9e",
  },
  editButton: {
    color: "#2196f3",
  },
  deleteButton: {
    color: "#f44336",
  },

  sortIcon: {
    cursor: "pointer",
    marginLeft: "5px",
  },

  getStatusStyle: (
    status: "Verified" | "Rejected" | "Pending"
  ): CSSProperties => {
    switch (status) {
      case "Verified":
        return {
          color: "#4caf50",
          backgroundColor: "#e8f5e9",
          padding: "2px 6px",
          borderRadius: "5px",
          fontSize: "12px",
        };
      case "Rejected":
        return {
          color: "#f44336",
          backgroundColor: "#ffebee",
          padding: "2px 6px",
          borderRadius: "5px",
          fontSize: "12px",
        };
      case "Pending":
        return {
          color: "#0288d1",
          backgroundColor: "#e1f5fe",
          padding: "2px 6px",
          borderRadius: "5px",
          fontSize: "12px",
        };
      default:
        return {};
    }
  },
};

export default styles;
