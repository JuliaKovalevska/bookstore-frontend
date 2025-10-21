$(document).ready(function() {
    let currentView = 'books';

    $('.nav-tab').on('click', function() {
        currentView = $(this).data('view');
        $('.nav-tab').removeClass('active');
        $(this).addClass('active');
        $('.view-content').addClass('hidden');
        $('#' + currentView + '-view').removeClass('hidden');
        loadDataForCurrentView();
    });

    function loadDataForCurrentView() {
        if (currentView === 'books') displayBooks();
        if (currentView === 'authors') displayAuthors();
        if (currentView === 'publishers') displayPublishers();
    }

    function displayBooks() {
        getBooks().done(function(data) {
            const list = $('#book-list');
            list.empty();
            data.forEach(item => {
                list.append(`<li class="book-item"><span><strong>${item.title}</strong> - ${item.author.name}</span><button class="edit-btn" data-id="${item.id}">Edit</button></li>`);
            });
        });
    }

    function displayAuthors() {
        getAuthors().done(function(data) {
            const list = $('#author-list');
            list.empty();
            data.forEach(item => {
                list.append(`<li class="book-item"><span>${item.name}</span><button class="edit-btn" data-id="${item.id}">Edit</button></li>`);
            });
        });
    }

    function displayPublishers() {
        getPublishers().done(function(data) {
            const list = $('#publisher-list');
            list.empty();
            data.forEach(item => {
                list.append(`<li class="book-item"><span>${item.name}</span><button class="edit-btn" data-id="${item.id}">Edit</button></li>`);
            });
        });
    }

    $('#logout-btn').on('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert('You have been logged out.');
        window.location.href = 'login.html';
    });

    function clearForm(view) {
        $(`#${view}-form`)[0].reset();
    }

    $('#books-view').on('click', '.btn-add', function() {
        const data = { title: $('#book-title').val(), author_id: $('#book-author-id').val(), publisher_id: $('#book-publisher-id').val() };
        addBook(data).done(() => { clearForm('books'); displayBooks(); });
    });
    $('#books-view').on('click', '.btn-update', function() {
        const id = $('#book-id').val();
        if (!id) return alert('Select an item to update');
        const data = { title: $('#book-title').val(), author_id: $('#book-author-id').val(), publisher_id: $('#book-publisher-id').val() };
        updateBook(id, data).done(() => { clearForm('books'); displayBooks(); });
    });
    $('#books-view').on('click', '.btn-delete', function() {
        const id = $('#book-id').val();
        if (!id) return alert('Select an item to delete');
        deleteBook(id).done(() => { clearForm('books'); displayBooks(); });
    });
    $('#books-view').on('click', '.edit-btn', function() {
        const id = $(this).data('id');
        getBookDetails(id).done(item => {
            $('#book-id').val(item.id);
            $('#book-title').val(item.title);
            $('#book-author-id').val(item.author.id);
            $('#book-publisher-id').val(item.publisher.id);
        });
    });

    $('#authors-view').on('click', '.btn-add', function() {
        const data = { name: $('#author-name').val() };
        addAuthor(data).done(() => { clearForm('authors'); displayAuthors(); });
    });
    $('#authors-view').on('click', '.btn-update', function() {
        const id = $('#author-id').val();
        if (!id) return alert('Select an item to update');
        const data = { name: $('#author-name').val() };
        updateAuthor(id, data).done(() => { clearForm('authors'); displayAuthors(); });
    });
    $('#authors-view').on('click', '.btn-delete', function() {
        const id = $('#author-id').val();
        if (!id) return alert('Select an item to delete');
        deleteAuthor(id).done(() => { clearForm('authors'); displayAuthors(); });
    });
    $('#authors-view').on('click', '.edit-btn', function() {
        const id = $(this).data('id');
        getAuthorDetails(id).done(item => {
            $('#author-id').val(item.id);
            $('#author-name').val(item.name);
        });
    });

    $('#publishers-view').on('click', '.btn-add', function() {
        const data = { name: $('#publisher-name').val() };
        addPublisher(data).done(() => { clearForm('publishers'); displayPublishers(); });
    });
    $('#publishers-view').on('click', '.btn-update', function() {
        const id = $('#publisher-id').val();
        if (!id) return alert('Select an item to update');
        const data = { name: $('#publisher-name').val() };
        updatePublisher(id, data).done(() => { clearForm('publishers'); displayPublishers(); });
    });
    $('#publishers-view').on('click', '.btn-delete', function() {
        const id = $('#publisher-id').val();
        if (!id) return alert('Select an item to delete');
        deletePublisher(id).done(() => { clearForm('publishers'); displayPublishers(); });
    });
    $('#publishers-view').on('click', '.edit-btn', function() {
        const id = $(this).data('id');
        getPublisherDetails(id).done(item => {
            $('#publisher-id').val(item.id);
            $('#publisher-name').val(item.name);
        });
    });

    loadDataForCurrentView();
});