import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={css.loader__box}><PropagateLoader color="#20bbff"/></div>
    )
}
