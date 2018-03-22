import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/employee");
  },
  // Gets a user with the given id
  getUser: function(id) {
    return axios.get("/api/employee/" + id);
  },
  // Deletes a user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/employee/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/employee", userData);
  },

   // Gets all purchase requests
  getPrs: function() {
    return axios.get("/api/pr");
  },
  // Gets a puchase request with the given id
  getPR: function(id) {
    return axios.get("/api/pr/" + id);
  },
  // Deletes a purchase request with the given id
  deletePR: function(id) {
    return axios.delete("/api/pr/" + id);
  },
  // Saves a purchase request to the database
  savePR: function(prData) {
    return axios.post("/api/pr", prData);
  },

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
  },

  // Gets all purchase request details
  getDetails: function() {
    return axios.get("/api/detail");
  },
  // Gets request detail with the given id
  getDetail: function(id) {
    return axios.get("/api/detail/" + id);
  },
  // Deletes a request detail with the given id
  deleteDetail: function(id) {
    return axios.delete("/api/detail/" + id);
  },
  // Saves a request detail to the database
  saveDetail: function(detailData) {
    return axios.post("/api/detail", detailData);
  }
};
