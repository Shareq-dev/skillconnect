import './build.mjs';
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';

const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']]
]);

createServer(async (request, response) => {
  const file = files.get(new URL(request.url, 'http://localhost').pathname);
  if (!file) {
    response.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end('Not found');
    return;
  }
  try {
    const data = await readFile(new URL(`./dist/${file[0]}`, import.meta.url));
    response.writeHead(200, {'Content-Type': file[1], 'X-Content-Type-Options': 'nosniff'});
    response.end(data);
  } catch {
    response.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end('Could not read the built client');
  }
}).listen(Number(process.env.PORT) || 3000, () => {
  console.log(`SkillConnect preview: http://localhost:${process.env.PORT || 3000}`);
});
