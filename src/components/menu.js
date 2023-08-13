import './menu.css'

export default function Menu (){     
    return (
        <div className="navbar">
            <div className="menu-options">
                <a href='/'>Home</a>
                <a href='/worker'>Worker</a>
                <a href='/job'>Job</a>
                <a href='/equipements'>Equipements</a> 
            </div>
        </div>
    )
}