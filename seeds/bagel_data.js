const { Bagel } = require("../models");

const bageldata = [
  {
    bagel_name: "Plain",
    description: "White bagel with nothing but dough",
    stock: 10,
    filename: "plain-bagel.jpg",
  },
  {
    bagel_name: "Everything",
    description: "Bagel with seeds and stuff",
    stock: 8,
    filename: "everything-bagel.jpg",
  },
  {
    bagel_name: "Cinnamon Raisin",
    description: "Bagel with cinnamon and raisins",
    stock: 7,
    filename: "raisin-bagel.png",
  },
  {
    bagel_name: "Blueberry",
    description: "Bagel with bluberries",
    stock: 100,
    filename: "blueberry.jpg",
  },
  {
    bagel_name: "Asiago",
    description: "Bagel with cheese",
    stock: 19,
    filename: "asiago.jpg",
  },
];

const seedBagel = () => Bagel.bulkCreate(bageldata);

module.exports = seedBagel;
