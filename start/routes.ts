/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BillingsController from '#controllers/billings_controller'
import RoomsController from '#controllers/rooms_controller'
import router from '@adonisjs/core/services/router'

router.post('/update-room', [RoomsController, 'updateRoom'])
router.post('/update-price', [BillingsController, 'updatePrice'])
