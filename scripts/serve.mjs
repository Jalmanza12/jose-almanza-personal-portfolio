import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml',
};

createServer((request, response) => {
  const requestPath = decodeURIComponent(request.url?.split('?')[0] || '/');
  const safePath = normalize(join(root, requestPath));
  const filePath = safePath.startsWith(root) ? safePath : join(root, 'index.html');
  const directoryIndex = join(filePath, 'index.html');
  const resolvedPath = existsSync(filePath) && statSync(filePath).isFile()
    ? filePath
    : existsSync(directoryIndex) && statSync(directoryIndex).isFile()
      ? directoryIndex
      : join(root, 'index.html');
  const contentType = mimeTypes[extname(resolvedPath)] || 'application/octet-stream';

  response.writeHead(200, { 'Content-Type': contentType });
  createReadStream(resolvedPath).pipe(response);
}).listen(port, host, () => {
  console.log(`Portfolio running at http://${host}:${port}`);
});
