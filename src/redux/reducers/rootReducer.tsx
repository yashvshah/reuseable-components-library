import { combineReducers } from 'redux';
import sidebarReducer from './SidebarReducer/SidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
