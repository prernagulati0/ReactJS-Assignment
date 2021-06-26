import React, {useEffect} from 'react'

const Main = () => {
    
    const getimages = async () => {
        
        const response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&nojsoncallback=1&api_key=dbbdd16700eb2dff99db00e64fb8af42');
        console.log(response);
        const data =  await response.json() ;
        console.log(data);
        {* <image src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} />*}
    }
    useEffect(() => {
        getimages();
    },[])
    return (
        <div className='images'>
            Loading...
        </div>
    )
}

export default Main
