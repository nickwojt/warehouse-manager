const router = require("express").Router();
const { Bagel } = require("../../models");

const withAuth = require("../../utils/auth");

// When a user logs in then they are brought ot his page and shown all bagel images and names in cards
//api/bagel
router.get("/", withAuth, async (req, res) => {
  try {
    const getBagels = await Bagel.findAll({
      attributes: ["bagel_name", "filename", "id"],
    });

    const eachBagel = getBagels.map((bagel) => bagel.get({ plain: true }));
    res.render("bagel", { eachBagel, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// When a card is clicked, use this route to display an individual bagel
router.get("/:id", async (req, res) => {
  try {
    const getBagel = await Bagel.findByPk(req.params.id);
    const bagel = getBagel.get({ plain: true });
    res.render("stock", { ...bagel, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id/stock", async (req, res) => {
  try {
    const bagelUpdate = await Bagel.update(
      {
        stock: parseInt(req.body.stock),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(bagelUpdate);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
