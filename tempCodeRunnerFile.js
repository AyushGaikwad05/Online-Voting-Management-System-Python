document.getElementById('login-form').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const role = document.getElementById('role').value;
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const response = await fetch(`/login/${role}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     });

//     const data = await response.json();

//     if (response.ok) {
//         alert('Login successful');
//         document.getElementById('login-container').classList.add('hidden');
//         document.getElementById('create-election-container').classList.remove('hidden');
//     } else {
//         alert(`Login failed: ${data.message}`);
//     }
// });

// document.getElementById('login-form').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const role = document.getElementById('role').value;
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;


//     const response = await fetch(`/login/${role}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     });
    
//     const result = await response.json();
    
//     if (response.ok) {
//         alert(result.message);  // Show success message
//         // Redirect or update the UI as needed
//     } else {
//         alert(result.message);  // Show error message
//     }

//     // Handle election form submission
// document.getElementById("create-election-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const electionName = document.getElementById("election_name").value;
//     const electionDate = document.getElementById("election_date").value;
//     const voterList = document.getElementById("voter_list").files[0];

//     const candidateNames = document.getElementsByName("candidate_name[]");
//     const partyNames = document.getElementsByName("party_name[]");
//     const partyLogos = document.getElementsByName("party_logo[]");

//     const candidates = [];
//     for (let i = 0; i < candidateNames.length; i++) {
//         candidates.push({
//             name: candidateNames[i].value,
//             partyName: partyNames[i].value,
//             partyLogo: partyLogos[i].files[0]
//         });
//     }

//     const formData = new FormData();
//     formData.append("election_name", electionName);
//     formData.append("election_date", electionDate);
//     formData.append("voter_list", voterList);

//     candidates.forEach((candidate, index) => {
//         formData.append(`candidate_name[${index}]`, candidate.name);
//         formData.append(`party_name[${index}]`, candidate.partyName);
//         formData.append(`party_logo[${index}]`, candidate.partyLogo);
//     });

//     // Send data to server to create election (Replace with your API endpoint)
//     axios.post('/api/create-election', formData)
//         .then(response => {
//             alert('Election created successfully!');
//             document.getElementById("create-election-container").classList.add("hidden");
//             document.getElementById("admin-panel").classList.remove("hidden");
//         })
//         .catch(error => {
//             console.error('Error creating election:', error);
//             alert('Error creating election.');
//         });
// });

// });

