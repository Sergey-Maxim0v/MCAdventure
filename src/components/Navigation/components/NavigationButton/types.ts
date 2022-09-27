import {RoutesType} from "../../../../constants/routes";

export interface INavigationButton {
  link: keyof RoutesType
  isActive?: boolean
}

