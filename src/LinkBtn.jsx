import { Link } from 'react-router'
import './Button.css'

export default function LinkBtn({link, buttonLabel}) {
    return (
        <Link to={link}>
            <button className='button font__playfair-display'>
                {buttonLabel}
            </button>
        </Link>

    )
}