const faker = require("faker");

let createRecord = (knex, id) => {
  return knex("users").insert({
    id,
    username: faker.internet.userName(),
    password: "password",
    name: faker.name.firstName(),
    email: faker.internet.exampleEmail(),
    created_at: new Date(),
    updated_at: new Date()
  });
};

exports.seed = (knex, Promise) => {
  return knex("users")
    .del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 20; i++) {
        records.push(createRecord(knex, i));
      }

      return Promise.all(records);
    });
};
