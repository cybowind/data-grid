# data-grid
This exercise addresses the challenge of how to view, sort and filter big
amount of the data in grid efficiently.

The project is divided into a (NodeJS/Express) server, which has a local data store to serve 5000 records of test data, and a (React/Redux) client, which uses the AG Grid library to display the data.

To run the project, open a terminal for the server, change directory to the server directory, and type in:

    node server.js

This will start the server on port 5000. The server is set up to allow requests from port 3000, which is where the client will be. To start the client, start another terminal and change to the client directory. Here, type in:

    npm install
    npm start
Point your browser to localhost:3000 and a table with 5000 rows of data should show up. Each column is sortable (by clicking on the column header) and the data can be filtered (by entering a filtering string in the input box). The data is efficiently viewed because the grid library is not based on a Table structure but changes the underlying DOM directly.

Another challenge of this project is to ensure clean code and maintainability. Clean code is a convention that programmers are encouraged to adopt so that code can be readable and therefore easy to debug, change, or handed off. Standards to follow include using self-disclosing variable and function names, such as "loadDataFromFile()" rather than "f()". Judiciously using blank lines to visually separate logical sections of code is another rule of thumb. Keep functions small (within one printed page is one convention), breaking them into smaller functions if necessary. Comments, should point out non-obvious and abstract information, but otherwise minimized in favor of readable code with clear names and logic. Ensuring clean code can be done with casual code reviews where colleagues carve out time to pair up and walk through code to be committed. The process should be neither stressful or pressured and, if the culture is properly nurtured, can be a relaxing and productive event that developers look forward to having.

Maintainability can be a higher level task where multiple components of a project may have dependencies that can be broken if certain practices are not observed. Clear documentation of exposed interfaces need to be in place to define protocols that modules need to adhere to in order to minimize unexpected behavior as different components of a large codebase follow different development paths. Using version control is essential and dependency manifests are extremely helpful. A semi-automated review process can be very helpful where regular checks are made on the growth of dependencies and the state of the integration. This is not an easy job with difficult metrics and prone to errors but, with automated unit testing before each commit augmented by regular check ups to supervise system integrity, sudden emergencies that often break carefully maintained protocol can be avoided.

