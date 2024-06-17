import "./filterbar.css"


const Filterbar = ({className, show, children, style}) => {
    if (show === false) return (<></>);
    
    const clss = ["filterbar", className].join(" ").trim();

    return (
        <div className={clss} style={style}>{children}</div>
    );
};

export default Filterbar;