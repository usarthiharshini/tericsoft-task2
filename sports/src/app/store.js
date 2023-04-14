import { configureStore } from '@reduxjs/toolkit'
import sportsReducer from '../features/sports/sportsReducer'

export default configureStore({
  reducer: {
    sports: sportsReducer
  }
})