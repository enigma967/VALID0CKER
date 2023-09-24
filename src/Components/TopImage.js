import React from 'react';
// import ScrollCarousel from 'scroll-carousel-react';
import './TopImage.css';
// import { Carousel } from '@trendyol-js/react-carousel';
// import * as AllImage from '../assests/images/TopImages';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../assests/images/TopImages', false, /\.(png|jpe?g|svg)$/));

console.log(images);

const newImage=images.map((image_value)=>{
    return "<img src='" +image_value+  "'/>";

}
)

console.log(newImage);

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


class TopImage extends React.Component {

    constructor(props) {
        super(props)

        this.state = { image: '' };


    }




    render() {
        return (

            <div className='picture'>
                <Carousel swiping={true}
                    showArrow={true}
                    responsive={responsive}
                    infinite={true}
                    showDots={false}
                    draggable={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    zIndex={1}>

                    {/* {newImage} */}

                    <img src={images[0]}/>
                    <img src={images[1]}/>
                    <img src={images[2]}/>
                    <img src={images[3]}/>

                 

    


                </Carousel>
            </div>
        )
    }
}

export default TopImage;

