# wayfare-api

```
npm install
npm run buildEnv
npm run setup:rest-server
npm run db:setup:rest-server

npm run start 
```

#To set up db
  #Postgres
    -brew install postgresql
    -brew services start postgresql
    -createuser root
    -createdb wayfare
    -psql wayfare
    -alter database wayfare owner to root

    #To seed data
      --npm run seedData

  #redis
    --brew install redis

#To start rest-server
  --npm install
  --npm run buildEnv
  --npm run setup:rest-server
  --npm run db:setup:rest-server
  --npm run start:rest-server

#To run tests in rest-server
  --npm run test
