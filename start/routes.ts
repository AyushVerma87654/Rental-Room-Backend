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

// router.get('/fetch-room', [RoomsController, 'fetchRooms'])
router.post('/update-room', [RoomsController, 'updateRoom'])
router.get('/update-data', [RoomsController, 'updateData'])

router.post('/update-price', [BillingsController, 'updatePrice'])
