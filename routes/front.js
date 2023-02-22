const express = require('express')
const router = express.Router()

const {GETAllProducts, aboutGET, contactGET, contactPOST, loginGET,teamGET} =require('../controllers/front')

router.get('/', GETAllProducts)
  
router.get('/about',aboutGET)

router.get('/team',teamGET)
  
router.get('/contact',contactGET)

router.post('/contact',contactPOST)
module.exports = router;