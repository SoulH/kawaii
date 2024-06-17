import { useState, useEffect } from "react";


const Brand = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
          setHeight(window.innerHeight);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            backgroundColor: 'black', 
            width: '100px', 
            minHeight: height + 'px'}}>
            <img src="logo.png" alt="Kawaii" style={{marginTop: '10px'}}/>
        </div>
    );
};

export default Brand;