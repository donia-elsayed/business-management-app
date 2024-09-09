import React, { useEffect, useState } from "react";
import { usersData } from "../data/users";
import Table from "../components/Table";

const UsersPage = () => {
  const headers = ["name", "email", "userStatus"];
  const [users, setUsers] = useState([]);
  const handleBlock = (id, currentStatus) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
            ...user,
            userStatus: currentStatus === "Active" ? "Blocked" : "Active",
          }
        : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || usersData;
    setUsers(storedUsers);
    localStorage.setItem("users", JSON.stringify(storedUsers));
  }, []);

  return (
    <div>
      <Table headers={headers} data={users} onToggleBlock={handleBlock} />
    </div>
  );
};

export default UsersPage;
