const BASE_URL = 'http://127.0.0.1:8000/api/';
const BOOKS_URL = BASE_URL + 'books/';
const AUTHORS_URL = BASE_URL + 'authors/';
const PUBLISHERS_URL = BASE_URL + 'publishers/';

function getAuthHeaders() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return {};
    return {'Authorization': 'Bearer ' + accessToken};
}

function getBooks() {
    return $.ajax({url: BOOKS_URL, type: 'GET', headers: getAuthHeaders()});
}

function getBookDetails(id) {
    return $.ajax({url: BOOKS_URL + id + '/', type: 'GET', headers: getAuthHeaders()});
}

function addBook(data) {
    return $.ajax({
        url: BOOKS_URL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: getAuthHeaders()
    });
}

function updateBook(id, data) {
    return $.ajax({
        url: BOOKS_URL + id + '/',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: getAuthHeaders()
    });
}

function deleteBook(id) {
    return $.ajax({url: BOOKS_URL + id + '/', type: 'DELETE', headers: getAuthHeaders()});
}

function getAuthors() {
    return $.ajax({url: AUTHORS_URL, type: 'GET', headers: getAuthHeaders()});
}

function getAuthorDetails(id) {
    return $.ajax({url: AUTHORS_URL + id + '/', type: 'GET', headers: getAuthHeaders()});
}

function addAuthor(data) {
    return $.ajax({
        url: AUTHORS_URL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: getAuthHeaders()
    });
}

function updateAuthor(id, data) {
    return $.ajax({
        url: AUTHORS_URL + id + '/',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: getAuthHeaders()
    });
}

function deleteAuthor(id) {
    return $.ajax({url: AUTHORS_URL + id + '/', type: 'DELETE', headers: getAuthHeaders()});
}

function getPublishers() {
    return $.ajax({url: PUBLISHERS_URL, type: 'GET', headers: getAuthHeaders()});
}

function getPublisherDetails(id) {
    return $.ajax({url: PUBLISHERS_URL + id + '/', type: 'GET', headers: getAuthHeaders()});
}

function addPublisher(data) {
    return $.ajax({
        url: PUBLISHERS_URL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: getAuthHeaders()
    });
}

function updatePublisher(id, data) {
    return $.ajax({
        url: PUBLISHERS_URL + id + '/',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: getAuthHeaders()
    });
}

function deletePublisher(id) {
    return $.ajax({url: PUBLISHERS_URL + id + '/', type: 'DELETE', headers: getAuthHeaders()});
}