# night-on-premise
Docker-compose for installation Nightscount CGM

## Instantiation

- Install the following system software on your server:
    - [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - [docker](https://docs.docker.com/engine/install/ubuntu/)
    - [docker-compose](https://docs.docker.com/compose/install/)
- Clone the configuration repository

```bash
git clone https://github.com/vaxann/night-on-premise.git
```

- Adjust the configuration.env configuration file by filling in all the values of each variable:

```bash
ACME_LOCATION=      # The place where SSL keys from Lets Encrypt will be stored  
ACME_EMAIL=         # Email which will be used to generate the certificate
HOST=               # The host or IP address where nightscout will run  
ROOT_USERNAME=      # ROOT user of the Mongo database
ROOT_PASSWORD=      # ROOT password for the Mongo database
DATABASE=           # The name of the database in which the nightscout data will be stored
DATABASE_LOCATION=  # DB location on disk
SCRIPT_LOCATION=    # The location of the init script on the disk
TZ=Europe/Moscow    # Time Zone
API_SECRET=         # Secret key for nightscout admin mode
USERNAME=           # Ordinary (not ROOT) database user 
PASSWORD=           # Password for ordinary (not ROOT) database user 
```

- Adjust the initialization file for the database - mongo-init.js

```jsx
db.createUser(
    {
        user: "<Specify the database user as USERNAME in configuration.env>",
        pwd: "<Specify the database password as PASSWORD in configuration.env>",
        roles: [
            {
                role: "readWrite",
                db: "<Specify database name as DATABASE in configuration.env>"
            }
        ]
    }
);
```

- Run a set of services using docker-compose on CLI

```bash
# use to start:
docker-compose --env-file configuration.env up -d

# to stop:
docker-compose down
```