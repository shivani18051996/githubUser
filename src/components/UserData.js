import React, { useState, useEffect } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css"
import { API_URL } from "../const";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <div key={user.id} onClick={() => navigate(`/user/${user.login}`)} className="userList">
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.login} src={user.avatar_url} />
              </ListItemAvatar>
              <ListItemText
                primary={user.login}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Profile URL:
                    </Typography>
                    {/* Use Link from Material-UI and pass the href prop to navigate. */}
                    <Link
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.html_url}
                    </Link>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default UserData;
