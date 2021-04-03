exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("weather")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("weather").insert([
        { id: 1, city: "Dallas", temp: 55.12, humidity: 23.0 },
        { id: 2, city: "Pheonix", temp: 95.12, humidity: 13.0 },
        {
          id: 3,
          city: "San Francisco",
          temp: 45.12,
          humidity: 23.0,
        },
        { id: 4, city: "New York", temp: 25.12, humidity: 33.0 },
      ]);
    });
};
