import {FC} from "react";
import {ICustomButton} from "./types";

const CustomButton: FC<ICustomButton> = ({children, width, ...props}) => (
    <button
        {...props}
        style={{width: width ? `${width}px` : 'auto'}}
        className={'h-[60px] rounded-xl font-bold bg-gradient-to-b from-[#7AD94F] to-[#00AD18]'}
    >
        <div className={'mx-4'}>
            {children}
        </div>
    </button>
)

export default CustomButton