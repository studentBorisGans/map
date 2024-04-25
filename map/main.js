function populate() {

    const url = 'http://localhost:5173/maps.json'; // Replace "your_port" with the port number you are using

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('File does not exist');
    }
    console.log('File exists');
  })
  .catch(error => {
    console.error(error.message);
  });



}
populate();