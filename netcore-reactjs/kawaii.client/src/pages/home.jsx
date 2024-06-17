import { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/default';
import Product from '../components/product';
import CatalogService from '../services/catalog';
import SizeFilter from '../filters/size';
import Sidebar from '../components/sidebar';
import Search from '../components/search';
import Filterbar from '../components/filterbar';
import GenderFilter from '../filters/gender';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import RoundedIconButton from '../components/rounded-icon-button';
import Modal from 'react-bootstrap/Modal';
import './home.css';


const Home = () => {
    const hideFiltersCond = () => window.innerWidth < 801;
    const srvc = new CatalogService();
    const [searchCtrl, setSearchCtrl] = useState(0);
    const [products, setProducts] = useState([]);
    const [hideFilters, setHideFilters] = useState(hideFiltersCond());
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [filters, setFilters] = useState({});
    
    useEffect(() => {
        srvc.search(filters).then(data => {
            setProducts(data);
        }).catch(err => console.log('error:', err));
    }, [searchCtrl]);

    useEffect(() => {
        const handleResize = () => setHideFilters(hideFiltersCond());
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const setSize = (size) => setFilters({...filters, size: size});
    const setGender = (gender) => setFilters({...filters, gender: gender});
    const setText = (e) => setFilters({...filters, text: e.currentTarget.value})

    return (
        <div>
            <div className={hideFilters ? 'home-grid-small' : 'home-grid'}>
                <div className='home-search'>
                    <Search onChange={setText} onClick={() => setSearchCtrl(searchCtrl + 1)}/>
                    <RoundedIconButton icon={faSliders} show={!hideFilters} onClick={() => setShowFilterModal(true)}/>
                </div>
                <Filterbar show={!hideFilters} className='home-filters'>
                    <SizeFilter onSelect={setSize}/>
                    <GenderFilter onSelect={setGender}/>
                </Filterbar>
                <div className='home-result-counter'>{products.length} product(s) found</div>
                <div className='home-results'>
                    {products.map((p, i) => {
                        return (<Product key={i} data={p}/>);
                    })}
                </div>
                <Sidebar className='home-sidebar'/>
            </div>
            <Modal centered show={showFilterModal} 
                onHide={() => setShowFilterModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filterbar>
                        <SizeFilter onSelect={setSize}/>
                        <GenderFilter onSelect={setGender}/>
                    </Filterbar>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Home;
