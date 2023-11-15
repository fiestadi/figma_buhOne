function sendMessage() {
   const name = document.getElementById('nameInput').value;
   const surname = document.getElementById('surnameInput').value;
   const message = document.getElementById('messageInput').value;
   fetch('/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ name, surname, message }),
   })
   .then(response => response.json())
   .then(data => {
     console.log('Success:', data);
     alert('Message sent!');
   })
   .catch((error) => {
     console.error('Error:', error);
     alert('Failed to send message. Please try again later.');
   });
 }
 