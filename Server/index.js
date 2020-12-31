const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio requirements -- Texting API 
const accountSid = 'AC808003b386c86c30a8c3a7b0a82f5dda';
const authToken = 'a21bf20c60f1fe22fd0efe366718e5b9';
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+19198997515' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(3000, () => console.log("Running on Port 3000"))