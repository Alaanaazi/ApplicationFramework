const os = require('os');

//Question 01
console.log('Hello World');
//console.error('Something went wrong');

//Question 02
 console.log('Architecture ' + os.arch());

console.log('CPUs ' + os.cpus().length);

console.log('OS ' + os.platform());

for (const cpu in os.cpus()) {
    console.log(cpu);
}

console.log('OS ' + os.homedir());

console.log('OS ' + os.freemem());

console.log('OS ' + os.userInfo()); 

//Question 03
 const fs = require('fs');

const filename = __dirname + '/test.txt';

fs.readFile(filename,"utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    //console.log(data.toString());
    //Printing data without to string method
     console.log(data);
}); 


//Question 04


 const filename1 = __dirname + '/test.txt';
const outFileNames = __dirname + '/test-copy.txt';

/* const data = fs.readFileSync(fileName);
console.log(data.toString()); */


const readStream = fs.createReadStream(filename1);
const writeStream = fs.createWriteStream(outFileNames);

 readStream.addListener('end', () => {
    console.log('End of file read');
});

writeStream.addListener('close', () => {
    console.log('End of file write');
    console.log(fs.readFileSync('test-copy.txt').toString());
}); 

readStream.pipe(writeStream); 


//Question 05
 const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            })
            
            break;
        case 'PUT':
            req.on('data', data => {
                res.write('<h1>PUT request received with ' + data + '</h1>');
                res.end();
            })
            
            break;
    }

    
    
}).listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is listening to port 3000');
}); 


