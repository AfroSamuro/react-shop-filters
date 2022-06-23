

export default function Filter(props) {

    const {
        data,
        param,
        isSelectedAll,
        isSelectedDesign,
        isSelectedBrand,
        isSelectedIllus,
        isSelectedMotion,
    } = props

    // console.log(data)

    const filterMenu = [...new Set(data.map(category => category.filter))]

    return (
        <nav className='content__nav'>
            <select className='nav__select' onClick={param}>
                <option className={`select__filter ${isSelectedAll ? 'select' : ''}`} value="Show All">
                    Show All
                </option>
                {filterMenu.map(category => {
                    return (
                        <option className="select__filter" value={category} >
                            {category}
                        </option>
                    )
                })}
            </select>

            <div className='nav__box'>
                <button className={`box__button ${isSelectedAll ? 'select' : ''}`} value='Show All' onClick={param}>
                    Show All
                </button>

                {filterMenu.map(category => {
                    return (
                        <button className={`box__button`} value={category} onClick={param}>
                            {category}
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}