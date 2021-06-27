const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//handle user requests not supported by the app
//default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//funciton to start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server runnong on port ${PORT}`);
});