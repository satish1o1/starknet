import React from "react";
import Card from "../card";
import './directory.css'
class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            section:[
                {
                    title:'dapp1',
                    img:'https://www.dappland.com/dapps/avnu/dapp-preview-avnu.png',
                    link:'https://app.avnu.fi/en',
                    twitte:'https://twitter.com/avnu_fi',
                    discord:'https://discord.com/invite/avnu-fi',
                    git:''
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/jediswap/dapp-preview-jediswap.png',
                    link:'https://www.jediswap.xyz/',
                    twitte:'https://twitter.com/jediswap',
                    discord:'https://discord.com/invite/jediswap',
                    git:''

                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/fibrousfinance/dapp-preview-fibrous.png',
                    link:'https://fibrous.finance/',
                    twitte:'https://twitter.com/FibrousFinance',
                    discord:'https://discord.com/invite/fibrous',
                    git:''
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/ekubo/ekubo-preview.png',
                    link:'https://ekubo.org/',
                    twitte:'https://twitter.com/EkuboProtocol',
                    discord:'https://ekubo.org/',
                    git:'https://github.com/EkuboProtocol'
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/10kswap/dapp-preview-10kswap.png',
                    link:'https://www.10kx.com/',
                    twitte:'https://twitter.com/10KSwap',
                    discord:'https://discord.com/invite/T77yphUPB6',
                    git:'https://github.com/10k-swap'
                },
               
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/nostra/dapp-preview-nostra.png',
                    link:'https://nostra.finance/',
                    twitte:'https://twitter.com/nostrafinance',
                    discord:'https://discord.com/invite/Eqp53YafYP',
                    git:''
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/sithswap/1500x500.jpeg',
                    link:'https://sithswap.com/',
                    twitte:'https://twitter.com/SithSwap',
                    discord:'https://discord.com/invite/gAD2wuzeNf',
                    git:'https://github.com/SithSwap'
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/element/dapp-preview-element.png',
                    link:'https://element.market/ethereum',
                    twitte:'https://twitter.com/Element_Market',
                    discord:'https://discord.com/invite/elementmarket',
                    git:'https://github.com/element-market'
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/unframed/dapp-preview-unframed.png',
                    link:'https://unframed.co/',
                    twitte:'https://twitter.com/unframedco',
                    discord:'https://discord.com/invite/GWSyrHg',
                    git:'https://github.com/argentlabs'
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/zklend/zklend-preview.png',
                    link:'https://app.zklend.com/markets',
                    twitte:'https://twitter.com/zkLend',
                    discord:'https://discord.com/invite/3v7RhwtJ8S',
                    git:'https://github.com/zkLend'
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/influence/1500x500.jpeg',
                    link:'https://www.influenceth.io/',
                    twitte:'https://twitter.com/influenceth',
                    discord:'https://discord.gg/UHMqbznhJS',
                    git:'https://github.com/influenceth/'
                },
                {
                    title:'dap2',
                    img:'https://www.dappland.com/dapps/starknetid/starknetid-preview.webp',
                    link:'https://www.starknet.id/',
                    twitte:'https://twitter.com/starknet_id',
                    discord:'https://discord.com/invite/8uS2Mgcsza',
                    git:'https://github.com/starknet-id'
                },
             
             

            ]
        }
    }


 render(){
    return(
        <div className="directory">  
          {
            this.state.section.map(({ title,...otherProps }) =>
               (
                  <Card  {...otherProps} />
               ))
          }
        </div>
    )
 }
 
}

export default Directory