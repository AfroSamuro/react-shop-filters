import { useState, useRef, useEffect } from 'react'
import Card from '../card/Card'
import Filter from '../filter/Filter'
import './MainContent.css'

export default function MainContent(props) {

    const { metaData } = props;

    const data = [...metaData];
    const [filterResult, setFilterResult] = useState(data);

    const [isSelectedAll, setIsSelectedAll] = useState(false)
    const [isSelectedDesign, setIsSelectedDesign] = useState(false)
    const [isSelectedBrand, setIsSelectedBrand] = useState(false)
    const [isSelectedIllus, setIsSelectedIllus] = useState(false)
    const [isSelectedMotion, setIsSelectedMotion] = useState(false)

    // const cardsPerPage = 1
    // let arrForHoldingCards = []
    // const ref = useRef(cardsPerPage)

    // const loopWithSlice = (start, end) => {
    //     const slicedCards = data.slice(start, end)
    //     arrForHoldingCards = arrForHoldingCards.concat(slicedCards)
    //     setFilterResult(arrForHoldingCards)
    // }

    // useEffect(() => {
    //     loopWithSlice(0, cardsPerPage)
    // }, [])

    // const handleLoadMore = () => {
    //     loopWithSlice(ref.current, ref.current + cardsPerPage)
    //     ref.current += cardsPerPage
    //     console.log(filterResult)
    // }


    const filterItems = (e) => {

        if (e.target.value === 'Show All') {
            setFilterResult(data);
            setIsSelectedAll(!isSelectedAll)
        }
        if (e.target.value === 'Design') {
            setFilterResult(data.filter(item => item.filter === e.target.value))
            setIsSelectedDesign(!isSelectedDesign)
        }
        if (e.target.value === 'Branding') {
            setFilterResult(data.filter(item => item.filter === e.target.value))
            setIsSelectedBrand(!isSelectedBrand)
        }
        if (e.target.value === 'Illustration') {
            setFilterResult(data.filter(item => item.filter === e.target.value))
            setIsSelectedIllus(!isSelectedIllus)
        }
        if (e.target.value === 'Motion') {
            setFilterResult(data.filter(item => item.filter === e.target.value))
            setIsSelectedMotion(!isSelectedMotion)
        }
    }

    const deleteCard = (e) => {
        const id = e.target.getAttribute('id');
        setFilterResult(filterResult.filter(item => item.id !== id))
    }



    return (
        <article className='content'>
            <Filter
                data={data}
                param={filterItems}
                isSelectedAll={isSelectedAll}
                isSelectedBrand={isSelectedBrand}
                isSelectedDesign={isSelectedDesign}
                isSelectedIllus={isSelectedIllus}
                isSelectedMotion={isSelectedMotion}
            />

            <main className='content__product'>
                <div className='product__cards'>
                    {filterResult.map(card =>
                        <Card data={card} param={filterItems} remove={deleteCard} key={card.id} />
                    )}
                </div>
                <div className='product__more'>
                    <button
                        className='more__button'
                    // onClick={handleLoadMore}
                    >
                        LOAD MORE
                    </button>
                </div>
            </main>
        </article>
    )
}