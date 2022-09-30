import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface ICustomButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  width?: number
}