const BASE_URL = 'http://127.0.0.1:8000/api/';
const BOOKS_URL = BASE_URL + 'books/';
const AUTHORS_URL = BASE_URL + 'authors/';
const PUBLISHERS_URL = BASE_URL + 'publishers/';

function getBooks() {
    return $.ajax({url: BOOKS_URL, type: 'GET'});
}

function getBookDetails(id) {
    return $.ajax({url: BOOKS_URL + id + '/', type: 'GET'});
}

function addBook(data) {
    return $.ajax({url: BOOKS_URL, type: 'POST', contentType: 'application/json', data: JSON.stringify(data)});
}

function updateBook(id, data) {
    return $.ajax({
        url: BOOKS_URL + id + '/',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
}

function deleteBook(id) {
    return $.ajax({url: BOOKS_URL + id + '/', type: 'DELETE'});
}

function getAuthors() {
    return $.ajax({url: AUTHORS_URL, type: 'GET'});
}

function getAuthorDetails(id) {
    return $.ajax({url: AUTHORS_URL + id + '/', type: 'GET'});
}

function addAuthor(data) {
    return $.ajax({url: AUTHORS_URL, type: 'POST', contentType: 'application/json', data: JSON.stringify(data)});
}

function updateAuthor(id, data) {
    return $.ajax({
        url: AUTHORS_URL + id + '/',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
}

function deleteAuthor(id) {
    return $.ajax({url: AUTHORS_URL + id + '/', type: 'DELETE'});
}

function getPublishers() {
    return $.ajax({url: PUBLISHERS_URL, type: 'GET'});
}

function getPublisherDetails(id) {
    return $.ajax({url: PUBLISHERS_URL + id + '/', type: 'GET'});
}

function addPublisher(data) {
    return $.ajax({url: PUBLISHERS_URL, type: 'POST', contentType: 'application/json', data: JSON.stringify(data)});
}

function updatePublisher(id, data) {
    return $.ajax({
        url: PUBLISHERS_URL + id + '/',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
}

function deletePublisher(id) {
    return $.ajax({url: PUBLISHERS_URL + id + '/', type: 'DELETE'});
}