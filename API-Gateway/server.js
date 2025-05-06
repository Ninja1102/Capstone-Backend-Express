const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: '*',
  credentials: true
}));

// Authentication middleware
const authenticationFilter = (req, res, next) => {
  // Add token validation logic here
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // In real use-case: verify JWT, etc.
  next();
};

// Proxy configuration
const proxyConfig = [
  {
    route: '/api/residents',
    target: 'http://localhost:9991',
    protected: true
  },
  {
    route: '/event',
    target: 'http://localhost:9992',
    protected: true
  },
  {
    route: '/feedback',
    target: 'http://localhost:9995',
    protected: true
  },
  {
    route: '/api/alert',
    target: 'http://localhost:9994',
    protected: true
  },
  {
    route: '/reminder',
    target: 'http://localhost:9993',
    protected: true
  },
  {
    route: '/auth',
    target: 'http://localhost:9996',
    protected: false
  }
];

// Setup all routes
proxyConfig.forEach(({ route, target, protected }) => {
  const middlewares = [];

  if (protected) {
    middlewares.push(authenticationFilter);
  }

  middlewares.push(
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${route}`]: '', // remove the route prefix
      }
    })
  );

  app.use(route, ...middlewares);
});

// Start server
const PORT = 9997;
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
