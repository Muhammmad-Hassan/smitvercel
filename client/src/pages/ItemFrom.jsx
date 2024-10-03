import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Box, Typography } from "@mui/material";

const ItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", description: "" });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/items/${id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/api/items/${id}`, formData)
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    } else {
      axios.post("http://localhost:5000/api/items", formData)
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Edit Item" : "Add New Item"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <Button variant="contained" color="primary" type="submit">
          {id ? "Update" : "Create"}
        </Button>
      </form>
    </Box>
  );
};

export default ItemForm;
