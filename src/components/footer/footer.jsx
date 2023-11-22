import './footer.css'
import { ReactComponent as Arrow } from '../../assessts/arrow-right-solid.svg'
const Footer = ()=>{
    return(
        <div className="footer">
           <div className='footer-left'>
              
           <div className='foot-sub'>
          <h1 className='titlee'> COMMUNITY AND TEAM </h1>
          <div className='twit-grop'>
               <div className='twit'><a href="https://twitter.com/StarkWareLtd" target='_blank'>@StarkWare</a></div>
               <div className='twit'><a href="https://twitter.com/StarknetFndn" target='_blank'>@starkFound</a></div>
               <div className='twit'><a href="https://twitter.com/jdiegooliva" target='_blank'>@jdiegoo</a></div>
               <div className='twit'><a href="https://twitter.com/EliBenSasson" target='_blank'>@EliBen</a></div>
               <div className='twit'><a href="https://twitter.com/ukolodny" target='_blank'>@ukolodny</a></div>
               <div className='twit'><a href="https://twitter.com/avihu28" target='_blank'>@avihu</a></div>
               <div className='twit'><a href="https://twitter.com/odin_free" target='_blank'>@odin</a></div>
               <div className='twit'><a href="https://twitter.com/GuthL" target='_blank'>@GuthL</a></div>
               <div className='twit'><a href="https://twitter.com/Starknet_OG" target='_blank'>@stark-digger</a></div>
               
               </div>

           </div>
           <div className='foot-sub'>
           <h1 className='titlee'> ENGAGE </h1>
           <div className='sociall'>
            <div className='tab'> <a href="https://twitter.com/Starknet" target='_blank'>TWITTER  <Arrow className ="arrow" /></a></div>
            <div className='tab'> <a href="https://discord.com/invite/qypnmzkhbc" target='_blank'>DISCORD  <Arrow className ="arrow" /></a></div>
            <div className='tab'> <a href="https://github.com/starknet-io/starknet-website" target='_blank'>GITHUB  <Arrow className ="arrow" /></a></div>
            <div className='tab'> <a href="https://community.starknet.io/" target='_blank'>FORUM  <Arrow className ="arrow" /></a></div>
           </div>
</div>
            
           </div>
           <div className='footer-right' >
           <iframe className='frame' src="https://www.starknet.io/en" title="W3Schools Free Online Web Tutorials"></iframe>
         
</div>
        </div>
    )
}

export default Footer;