const envBuild = {
  'rest-server': [
    'NODE_ENV=test',
    'PORT=3396',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost', // MUST keep localhost for pg
    'LOCAL_DATABASE=wayfare',
    'LOCAL_PASSWORD=password',
    'LOCAL_PORT=5432',
    // --- FOR AWS RDS ---
    // 'AWS_USER=',
    // 'AWS_HOST=',
    // 'AWS_DATABASE=',
    // 'AWS_PASSWORD=',
    // 'AWS_PORT=',
  ],
  // not sure how socket-server .env works...
  'socket-server': [
    'NODE_ENV=',
    'HOST=http://localhost', 
    'PORT=4155',
    'REST_SERVER_URL=http://localhost:4990',
    'TOKEN_SECRET='
  ],
  'oauth-server': [
    'NODE_ENV=',
    'HOST=localhost',
    'PORT=',
    'REST_SERVER_URL=localhost:3396'
  ]
}

module.exports = envBuild;