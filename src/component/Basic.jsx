import React from 'react';

function Basic(){
    let imgURL= 'https://cdn.pixabay.com/photo/2024/02/21/15/09/plant-8587893_1280.jpg'
    return(
        <React.Fragment>
            <div>
            <img src={imgURL} alt=''/>
            </div>
        </React.Fragment>
    ) 
}
export default Basic




