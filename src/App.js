import './reset.css'
import './main.css'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'

import img1 from './components/images/2161353.jpg'
import img2 from './components/images/dep.jpg'
import img3 from './components/images/dev.jpg'
import img4 from './components/images/dip.png'
import img5 from './components/images/dob.png'
import img6 from './components/images/dur.jpg'
import img7 from './components/images/gob.jpg'
import img8 from './components/images/large-0.jpg'
import img9 from './components/images/mustache.jpg'
import { v4 as uuidv4 } from 'uuid';


export default function App() {

    const Card = (img, title, filter) => {
        return { img: img, title: title, filter: filter, id: uuidv4() }
    }

    const cardOne = Card(img1, 'SOFA', 'Design');
    const cardTwo = Card(img2, 'KeyBoard', 'Branding');
    const cardThree = Card(img3, 'Work Media', 'Illustration');
    const cardFour = Card(img4, 'HandP', 'Motion');
    const cardFive = Card(img5, 'Jambo', 'Design');
    const cardSix = Card(img6, 'Hippie', 'Branding');
    const cardSeven = Card(img7, 'Mouse', 'Illustration');
    const cardEight = Card(img8, 'Monitor', 'Motion');
    const cardNine = Card(img9, 'Plate', 'Design');

    const data = [
        cardOne,
        cardTwo,
        cardThree,
        cardFour,
        cardFive,
        cardSix,
        cardSeven,
        cardEight,
        cardNine,
    ]


    return (
        <>
            <Header />
            <MainContent metaData={data} />
        </>
    )
}