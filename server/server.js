const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;  // Server on port 5000
const fs = require('fs')                // Access to filesystem

//////////////////////////////////////////////////////////
// Allow access from client domain
//////////////////////////////////////////////////////////
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,           
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//////////////////////////////////////////////////////////
// Define some routes
//////////////////////////////////////////////////////////
app.use(express.static('../public'));

//////////////////////////////////////////////////////////
// Mock data to be read in from server file
//////////////////////////////////////////////////////////
global.mockData = {}
const MOCK_DATA_FILE = './data/mock_operation_data_5000.json';

function loadDataFromFile() {  // Function to start async read of the mock data
  fs.readFile(MOCK_DATA_FILE, 'utf8', (error, data) => {
      if (error) {
          console.log(error);
          return;
      }
      loadDataCompleted(data);
  })    
}

function loadDataCompleted(data) {  // Callback upon completion of mock data read
  global.mockData = JSON.parse(data);
  console.log(global.mockData[0]);
}

loadDataFromFile();                // Read in the mock data

//////////////////////////////////////////////////////////
// Server port listening and routing
//////////////////////////////////////////////////////////
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route for the mock data
app.get('/mock_data', (req, res) => { 
  res.send({ 
    express: JSON.stringify(global.mockData) === '{}' 
    ? "Loading..."
    : global.mockData
  }); 
}); 
