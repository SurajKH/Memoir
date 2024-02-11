const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const twilio = require('twilio');

require('dotenv').config();

const app = express();
const port = 3001; // Choose an appropriate port
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;


const client = new twilio(accountSid, authToken);


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.post('/send-sms',async(req,res)=>
{
  const {name,phone}=req.body;
  try
  {
     await client.messages.create({
      body: `Hi ${name}, Thanks for reaching out to us, we will be contacting you soon!`,
      from: twilioPhoneNumber,
      to: phone,
     })
     console.log('SMS sent successfully');
     res.status(200).send('SMS sent successfully');

  }
  catch(error)
  {
    console.log("Caught Error: ",error.message);
    res.status(500).send('Error sending SMS');
  }
});  

app.post('/execute', (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required.' });
  }

  let command, options;

  if (language === 'java') {
    command = 'javac -d . -';
    options = { encoding: 'utf-8' };
  } else if (language === 'cpp') {
    command = 'g++ -o output -x c++ -';
    options = { encoding: 'utf-8' };
   }
  else if (language === 'javascript') {
    // Execute JavaScript directly using Node.js
    command = 'node';
    options = { encoding: 'utf-8' };
  } else if (language === 'python') {
    // Execute Python using Python interpreter
    command = 'python3';
    options = { encoding: 'utf-8' };
  }  else {
    return res.status(400).json({ error: 'Unsupported language.' });
  }

  const childProcess = exec(command, options, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: 'Compilation error', stderr });
    }

    const executionCommand = language === 'java' ? 'java output' : './output';

    exec(executionCommand, options, (err, stdout, stderr) => {
      if (err) {
        return res.status(500).json({ error: 'Execution error', stderr });
      }

      res.json({ output: stdout, stderr });
    });
  });

  childProcess.stdin.write(code);
  childProcess.stdin.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
