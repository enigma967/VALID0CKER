import { Carousel } from 'react-carousel-minimal';

import React from 'react';




function importAll(r){
    return r.keys().map(r);
}


const images = importAll( require.context('../assests/images/TopImages', false, /\.(png|jpe?g|svg)$/) );




  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }



class TopImages extends React.Component {

    constructor(props) {
        super(props);
        this.state={

        }
    }
    

    render() {
        const captionStyle = {
            fontSize: '2em',
            fontWeight: 'bold',
            color:'red',
            // paddingLeft: '10px',
            
            // position : 'relative',
            // paddingLeft: '10px',

          }
          
        return (
            <div className="App">
              <div style={{ textAlign: "center" }}>
                <div style={{
                  padding: "0 20px"
                }}>
                  <Carousel
                    data={
                         [
                            {
                              image: images[0],
                            //   caption:"Make your document more secure with our Validocker"
                            },
                            {
                              image: images[1],
                            //   caption:"Manage your access to share your documents more securely with your stakeholder"
                            },
                           
                            {
                              image: images[2],
                            //   caption:"Track your change on just a single click withour loosing your previous document"
                              
                            }
                          ]
                    }
                    time={2000}
                    width="100vw"
                    height="80vh"
                    captionPosition="center"
                    
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    captionStyle={captionStyle}
                    automatic={true}
                    dots={false}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    
                  />
                </div>
              </div>
            </div>
          );
            }
 

}

export default TopImages;