import './style.css'
import logoIf from '../../assets/montes_claros_vetor.svg'
import logoReact from '../../assets/react.svg'

const Header = ({title}) => {
    return (
        <div className='header'>
            <div className='images'>
                <img src={logoIf} className="logo" alt="Logo IFNMG" />
                <img src={logoReact} className='logo react' alt='logo react' />
            </div>
            <h1>{title}</h1>
        </div>
    )
}

export default Header