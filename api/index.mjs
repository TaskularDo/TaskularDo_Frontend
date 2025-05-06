import { app } from '../dist/server/server.mjs';
import { writeResponseToNodeResponse } from '@angular/ssr/node';

export default async function handler(req, res) {
  try {
    const response = await app.handle(req);
    if (response) {
      await writeResponseToNodeResponse(response, res);
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  } catch (err) {
    console.error('SSR error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
