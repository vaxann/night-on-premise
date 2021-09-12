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