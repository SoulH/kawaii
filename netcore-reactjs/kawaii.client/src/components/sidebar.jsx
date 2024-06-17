import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Cart from "./cart";
import "./sidebar.css";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../indexeddb/db";
import LoginForm from "../forms/login";

const SidebarIconWrapper = ({children}) => {
    return (<div className="sidebar-icons">{children}</div>);
};

const SidebarIcon = ({children, onClick}) => {
    return (<div className="sidebar-icon" onClick={onClick}>{children}</div>);
};

const Sidebar = ({style}) => {
    const [selected, setSelected] = useState(undefined);
    const username = undefined;
    const position = "end";

    const changeSelected = (key) => setSelected(selected === key ? undefined : key);
    const bdStyle = {fontSize: '7px', position: 'relative', left: '-6px', bottom: '-3px'};
    
    const items = useLiveQuery(() => db.cart.where({userId: 0}).toArray());
    
    return (
    <div style={style}>
        <SidebarIconWrapper>
            <SidebarIcon onClick={() => changeSelected("account")}>
                <FontAwesomeIcon icon={faUser}/>
            </SidebarIcon>
            <SidebarIcon onClick={() => changeSelected("cart")}>
                <FontAwesomeIcon icon={faCartShopping} style={{marginLeft: '6px'}}/>
                <Badge pill bg="warning" text="dark" style={bdStyle}>{(items || []).length}</Badge>
            </SidebarIcon>
        </SidebarIconWrapper>
        <Offcanvas placement={position} 
                show={() => selected === "account" && typeof username === "string"} 
                onHide={() => setSelected(undefined)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><strong>{username}</strong></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

            </Offcanvas.Body>
        </Offcanvas>
        <Modal centered
            show={selected === "account" && username === undefined} 
            onHide={() => setSelected(undefined)}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm/>
            </Modal.Body>
        </Modal>
        <Offcanvas placement={position} 
                show={selected === "cart"} 
                onHide={() => setSelected(undefined)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><strong>Cart</strong></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Cart items={items || []}/>
            </Offcanvas.Body>
        </Offcanvas>
    </div>);
};

export default Sidebar;