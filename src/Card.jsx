import './Card.css';

// import images
import equilibrium from './assets/images/image-equilibrium.jpg'
import view from './assets/images/icon-view.svg'
import ethereum from './assets/images/icon-ethereum.svg'
import clock from './assets/images/icon-clock.svg'
import author from './assets/images/image-avatar.png'

const Card = () => {

    return  (
        <div className="Card">
            <div className='img_container'>
                <img className='card_img' src={equilibrium} alt='equilibrium'/>
            </div>
            {/* <img className='card_img' src={equilibrium} alt='equilibrium'/> */}
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className='content'>
                <div className='price'>
                    <img src={ethereum} alt='ethereum svg'/>
                    <span>0.041 ETH</span>
                </div>
                <div className='time'>
                    <img src={clock} alt='clock svg'/>
                    <span>3 days left</span>
                </div>
            </div>

            <div className='author'>
                <img src={author} alt='author'/>
                <p>
                    Creation of <span>Jules Wyvern Copy</span>
                </p>
            </div>
        </div>
    )
}
export default Card;