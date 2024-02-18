// UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Typography, Container, Paper, Grid } from '@mui/material';
import { API_URL } from '../const';

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`${API_URL}/${username}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUserDetails();
  }, [username]);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt={user.login} src={user.avatar_url} sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{user.login}</Typography>
            {user.name && <Typography>Name: {user.name}</Typography>}
            {user.company && <Typography>Company: {user.company}</Typography>}
            <Typography>Followers: {user.followers}</Typography>
            <Typography>Following: {user.following}</Typography>
            <Typography>Public Repos: {user.public_repos}</Typography>
            <Typography>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserDetails;
