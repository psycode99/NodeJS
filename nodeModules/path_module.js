import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);


console.log(__filename);

// basename
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));
console.log(path.basename(path.dirname(__filename)));

// extension name;
console.log(path.extname(__filename));

//parse
console.log(path.parse(__filename));
console.log(path.parse(__filename).root);
console.log(path.parse(__filename).dir);

// concatenating two paths
console.log(path.join(path.dirname(__filename), 'test', 'index.html'));