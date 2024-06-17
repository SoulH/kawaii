import { Outlet } from 'react-router-dom';
import Brand from '../components/brand';


const DefaultLayout = () => {
    return (
        <div style={{ 
            display: 'flex', 
            minHeight: '100%',}}>
            <Brand />
            <div style={{margin: '10px', width: '100%'}}>
                <Outlet/>
            </div>
        </div>
    );
};

export default DefaultLayout;