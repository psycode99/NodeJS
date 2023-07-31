import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// create a folder
// fs.mkdir(path.join(path.dirname(__filename), 'test/'), {}, err => {
//     if (err) throw err;
//     console.log('folder created...');
// } )


// create and write to file;
// fs.writeFile(
//     path.join(path.dirname(__filename), 'test', 'node.txt'),
//     'hello Node',
//      err => {
//     if (err) throw err;
//     console.log('file written to');
// })


// append to file
// fs.appendFile(
//     path.join(path.dirname(__filename), 'test', 'node.txt'),
//     ",\nWhy can't this be simpler!",
//     err =>{
//         if (err) throw err;
//         console.log('file appended...');
//     }
// )


//  read file
// fs.readFile(
//     path.join(path.dirname(__filename), '/test', 'node.txt'), 
//     'utf8',
//     (err, data) => {
//      if (err) throw err;
//     console.log(data);
//     }

// )



// fs.rename(
//     path.join(path.dirname(__filename), 'test', 'node.txt'),
//     path.join(path.dirname(__filename), 'test', 'nodejs.txt'),
//     err => {
//         if (err) throw err
//         console.log('file renamed');
//     }
// )