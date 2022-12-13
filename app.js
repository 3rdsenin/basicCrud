const app = require('./index');

//database


//PORT
const PORT = 3009  || process.env.PORT;

app.listen(PORT, () => {
    console.log('listening for connections')
})