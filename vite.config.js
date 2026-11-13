import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load local environment variables from .env / .env.local into process.env
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      react(),
      {
        name: 'local-api-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url ? req.url.split('?')[0] : '';

            if (url === '/api/create-payment') {
              try {
                const handler = (await import('./api/create-payment.js')).default;
                let rawBody = '';
                req.on('data', (chunk) => { rawBody += chunk; });
                req.on('end', async () => {
                  try {
                    req.body = rawBody ? JSON.parse(rawBody) : {};
                  } catch (e) {
                    req.body = {};
                  }
                  // Polyfill Express/Vercel serverless helper methods
                  res.status = (code) => {
                    res.statusCode = code;
                    return res;
                  };
                  res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  };
                  await handler(req, res);
                });
                return;
              } catch (err) {
                console.error('[Local API Error]:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: err.message }));
                return;
              }
            }

            if (url === '/api/webhook') {
              try {
                const handler = (await import('./api/webhook.js')).default;
                let rawBody = '';
                req.on('data', (chunk) => { rawBody += chunk; });
                req.on('end', async () => {
                  try {
                    req.body = rawBody ? JSON.parse(rawBody) : {};
                  } catch (e) {
                    req.body = {};
                  }
                  res.status = (code) => {
                    res.statusCode = code;
                    return res;
                  };
                  res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  };
                  await handler(req, res);
                });
                return;
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: err.message }));
                return;
              }
            }

            next();
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: false,
      host: true
    }
  };
});



// https://github.com/kabirhaldar4444-a11y/Newcambridgeuni