// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(2000);
// $('#flashMessage').slideUp();
// OR 
$('#flashMessage').hide();


// $('#blogTitlePreview').text('My First Blog Post');
// $('#blogContentPreview').text('This is my first post!'); OR

const title = "My First Blog Post";
const content = "This is my <strong>first</strong> post!";



$('#previewButton').click(() => {
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

    $('#flashMessage').slideDown(1000).delay(2000).slideUp();
});