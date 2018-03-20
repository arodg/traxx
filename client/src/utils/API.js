import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};
