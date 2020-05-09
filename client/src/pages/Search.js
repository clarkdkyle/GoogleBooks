import React from "react";
import Results from "../components/Results";
import API from "../utils/API";
import Form from "../components/Form"

class Search extends React.Component {
  state = {
      value: "",
      books: []
  };

  componentDidMount() {
      this.searchBook();
  }

  makeBook = bookData => {
      return {
          _id: bookData.id,
          title: bookData.volumeInfo.title,
          authors: bookData.volumeInfo.authors,
          description: bookData.volumeInfo.description,
          image: bookData.volumeInfo.imageLinks.thumbnail,
          link: bookData.volumeInfo.previewLink
      }
  }
  // Loads all books and sets them to books
  searchBook = query => {
    API.getBook(query)
        .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
        .catch(err => console.error(err));
};

  // Handles updating component state when the user types into the input field
  handleInputChange =event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }; 

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
};

  render() {
    return (
        <div>
            <Form
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
            <div className="container">
                <h2>Results</h2>
                <Results books={this.state.books} />
            </div>
        </div>
    )
}
}

export default Search;
