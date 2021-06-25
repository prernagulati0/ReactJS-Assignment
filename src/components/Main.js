import React, {useEffect} from 'react'

const Main = () => {
    
    const getimages = async () => {
        
        const response = await fetch('dbbdd16700eb2dff99db00e64fb8af42');
        console.log(response);
        const data =  await response.json() ;
        console.log(data);
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
