const { getAllDiocese, updateDiocese, addDiocese, deleteDiocese } = require("../controller/DioceseController")

const router = require("express").Router()

router.get("/dioceses", getAllDiocese)
router.post("/add-diocese", addDiocese)
router.patch("/update-diocese/:id", updateDiocese)
router.delete("/delete-diocese/:id", deleteDiocese)


module.exports = router