const os = require('os'); 
let hostName = os.hostname();
let hostNet = os.networkInterfaces();
let timeStamp = time = Math.floor(Date.now()/1000)

const serverBasic = [{
    message : 'Automate all the things!',
    timestamp : timeStamp
    },
];

const serverInfo = [{
    hostname : hostName,
    network : hostNet,
    message : 'Mr. E.V. Lambert of Homeleigh, The Burrows, Oswestly, has presented us with a poser. We do not know which bush he is behind, but we can soon find out.'
    },
];

const router = app => {

    app.get('/', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send(serverBasic);
    });

    app.get('/info', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send(serverInfo);
    })
    
}

module.exports = router;
