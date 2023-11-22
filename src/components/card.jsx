
import './card.css'
import { ReactComponent as LinkIcon } from '../assessts/paperclip-solid.svg'
import { ReactComponent as TwittIcon } from '../assessts/twitter.svg'
import { ReactComponent as Discord } from '../assessts/discord.svg'
import { ReactComponent as Github } from '../assessts/github.svg'



const Card = ({img,link,twitte,discord,git,...otherProps})=>{
    return (
        <div className='card'>
           <div className='img-container'   style={{
            backgroundImage: `url(${img})`
            }}>

           </div>
           <div className='link-container'>
            <div className='site'>
            <h1 className='title'>VISIT </h1>
            <a href={link} target='_blank'><LinkIcon className="icon" /></a>
            </div>
             <div className='social'><a href={twitte} target='_blank'><TwittIcon className="icon" /></a></div>
             <div className='social'><a href={discord} target='_blank'><Discord className="icon" /></a>
</div>
             <div className='social'><a href={git} target='_blank'><Github className="icon" /></a></div>
</div>
        </div>


    )
}

export default Card