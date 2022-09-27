import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface ICustomInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}