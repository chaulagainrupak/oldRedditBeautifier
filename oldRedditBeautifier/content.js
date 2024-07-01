window.addEventListener('load', function() {
    let submitters = document.querySelectorAll('.submitter:not(.author)');
    for (let submitter of submitters) {
        submitter.innerHTML = 'OP';
        submitter.style.color = '#00AA00';
        submitter.style.fontSize = '1.3em';
        submitter.style.fontWeight = 'bold';

        if (submitter.parentElement) {
            submitter.parentElement.style.fontSize = '1.1em';
        }
    }
    // Modify expand elements
    let expandElements = document.querySelectorAll('.expand');
    for (let element of expandElements) {
        element.style.fontSize = '1.2em';
    }
    // Modify author elements
    let authorElements = document.querySelectorAll('.author');
    for (let element of authorElements) {
        element.style.fontSize = '1.2em';
    }
    // Modify score elements
    let upvotes = document.querySelectorAll('.score');
    for (let upvote of upvotes) {
        upvote.style.color = 'red';
    }
    // Modify live-timestamp elements
    let timeElements = document.querySelectorAll('.live-timestamp');
    for (let element of timeElements) {
        element.style.color = '#00AA00'; // Green color
    }
});
