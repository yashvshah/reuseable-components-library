import { TOGGLE_SIDEBAR, SidebarActionTypes } from '../../actionTypes/SidebarActionType/SidebarActionType';

export interface SidebarState {
  isMobileMenuOpen: boolean;
}

const initialState: SidebarState = {
  isMobileMenuOpen: false,
};

const sidebarReducer = (
  state = initialState,
  action: SidebarActionTypes
): SidebarState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isMobileMenuOpen: !state.isMobileMenuOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
