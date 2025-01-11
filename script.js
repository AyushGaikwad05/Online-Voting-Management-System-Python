// Handle the Aadhar XML upload
document.getElementById('aadhar-upload-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const file = document.getElementById('aadhar-file').files[0];
    if (!file) {
        alert('Please select an Aadhar XML file.');
        return;
    }

    // Upload the file to Firebase Storage
    const storageRef = firebase.storage().ref('aadhar-xmls/' + file.name);
    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', function (snapshot) {
        // Handle upload progress here if needed
    }, function (error) {
        console.error('Error uploading Aadhar XML:', error);
    }, function () {
        // Get the file URL after successful upload
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('Aadhar XML uploaded to Firebase Storage:', downloadURL);

            // Now, parse the Aadhar XML
            parseAadharXML(downloadURL);
        });
    });
});

// Function to parse Aadhar XML and extract name
function parseAadharXML(url) {
    fetch(url)
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
            
            // Assuming the name is stored in a <name> element (adjust based on actual XML structure)
            const name = xmlDoc.querySelector('name').textContent;
            
            // Display the extracted name and enable voting if user is authenticated
            document.getElementById('voter-name').textContent = `Hello, ${name}. You are eligible to vote.`;
            document.getElementById('vote-btn').classList.remove('hidden');
            document.getElementById('vote-btn').onclick = function () {
                storeVote(name);
            };
        })
        .catch(error => {
            console.error('Error parsing Aadhar XML:', error);
        });
}

// Function to store the vote in the database
function storeVote(name) {
    fetch('/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Vote stored successfully') {
            alert('Vote has been successfully recorded!');
        } else {
            alert('Error storing vote: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error storing vote:', error);
    });
}
