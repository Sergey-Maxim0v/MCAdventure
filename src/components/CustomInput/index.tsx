import {FC} from "react";
import {ICustomInput} from "./types";
import classNames from "classnames";
import styles from './styles.module.scss'

const CustomInput: FC<ICustomInput> = ({label, ...props}) => (
    <div className={'w-full'}>
      {label && (
          <p
              className={'mb-2 font-semibold text-sm'}
          >
            {label}
          </p>
      )}

      <input
          {...props}
          className={
            classNames(
                'h-[60px] p-[22px] rounded-xl w-full box-border placeholder:opacity-60 border border-transparent border-dashed focus:border-lime-600',
                styles.input,
                props.className
            )
          }
          placeholder={props.placeholder ? props.placeholder : 'Ввод...'}
      />
    </div>
)

export default CustomInput