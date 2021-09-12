db.createUser(
    {
        user: "<Укажите пользователя БД как USERNAME в configuration.env>",
        pwd: "<Укажите пароль к БД как PASSWORD в configuration.env>",
        roles: [
            {
                role: "readWrite",
                db: "<Укажите имя БД как DATABASE в configuration.env>"
            }
        ]
    }
);