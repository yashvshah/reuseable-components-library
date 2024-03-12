import { TOGGLE_SIDEBAR, SidebarActionTypes } from '../../actionTypes/SidebarActionType/SidebarActionType';

export const toggleSidebar = (): SidebarActionTypes => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};
