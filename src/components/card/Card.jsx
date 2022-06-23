import { useState } from 'react'
import './Card.css'


export default function Card(props) {

    const { param, remove } = props;
    const { img, title, filter, id } = props.data;

    const [isSelect, setIsSelect] = useState(false)

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }

    return (
        <div
            id={id}
            className={`card ${isSelect ? 'card__select' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={handleSelect}
            onKeyDown={isSelect ? remove : null}
            tabIndex='-1'
        >
            <div className='card__filter'>
                <button className='filter__button' value={filter} onClick={param}>
                    {filter}
                </button>
            </div>

            <p className='card__title'>
                {title}
            </p>
        </div>
    )
}