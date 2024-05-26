// Add an event listener to the form
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the value from the input field
    var inputData = document.getElementById('inputData').value;

    // Send a POST request to the server
    fetch('/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: inputData}),
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        // Display the response data
        document.getElementById('response').innerText = JSON.stringify(data);
    });
});
