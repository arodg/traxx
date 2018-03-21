import axios from "axios";

export default {
  // Gets all items
  getItems: function() {
    return axios.get("/api/item");
  },
  // Gets item with the given id
  getItem: function(id) {
    return axios.get("/api/item/" + id);
  },
  // Deletes an item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/item/" + id);
  },
  // Saves an item to the database
  saveItem: function(itemData) {
    return axios.post("/api/item", itemData);
  }
};
