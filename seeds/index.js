const sequelize = require("../config/connection");
const seedBagel = require("./bagel_data");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBagel();

  process.exit(0);
};

seedAll();
