import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Menu (){
    const [menuClose, setMenuClose] = useState(false);

    const openMenu = () => {
        setMenuClose(!menuClose)
    }
      
    return (
        <div>
            <button onClick={openMenu}>Open Menu</button>
            {menuClose && (
                <div className="menu-options">
                    <Link to='/worker'>Worker</Link>
                    <Link to='/job'>Job</Link>
                    <Link to='/tools'>Tools</Link> 
                </div>
            )}
        </div>
    )
}