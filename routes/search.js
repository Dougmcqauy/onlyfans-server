const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const query = req.query.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const searchResults = await User.aggregate([
      {
        $search: {
          index: "default",
          text: {
            query: query,
            path: ["bio", "price", "realName", "username"]
          }
        }
      },
      {
        $facet: {
          metadata: [
            { $count: "total" },
            {
              $project: {
                total: 1,
                totalPages: {
                  $ceil: {
                    $divide: ["$total", limit]
                  }
                }
              }
            }
          ],
          data: [
            { $skip: (page - 1) * limit },
            { $limit: limit }
          ]
        }
      },
      {
        $project: {
          data: 1,
          count: { $arrayElemAt: ["$metadata.total", 0] },
          totalPages: { $arrayElemAt: ["$metadata.totalPages", 0] },
          currentPage: page
        }
      }
    ]);

    res.status(200).json(searchResults[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;




module.exports = router;
