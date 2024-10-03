import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(() => setItems(items.filter(item => item.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <Grid container spacing={2} mt={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/edit/${item.id}`)}
                sx={{ marginRight: 1 }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" component={Link} to="/add">
          Add New Item
        </Button>
      </Grid>
    </Grid>
  );
};

export default ItemList;
