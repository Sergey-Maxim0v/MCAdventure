import {FC} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

const LinkVK: FC = () => (
    <button
        className={classNames('w-[36px] h-[22px] mr-2 opacity-50 hover:opacity-100 transition-opacity', styles.logo)}
    />
)

export default LinkVK