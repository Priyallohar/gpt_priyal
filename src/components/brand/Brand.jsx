import React from 'react'
import "./Brand.css"
import google from "../../assets/google.png"
import atlassian from "../../assets/atlassian.png"
import spotify from "../../assets/shopify.png"
import slack from "../../assets/slack.png"
import dropbox from "../../assets/dropbox.png"

const Brand = () => {
  return (
    <div className='gpt3_brand section__padding'>
       <div>
        <img src={google} alt='google'/>
        </div>
       <div>
        <img src={atlassian} alt='atlassian'/></div>
       <div>
        <img src={spotify} alt="spotify"/></div>
       <div>
        <img src={slack} alt='slack'/>
        </div>
       <div>
        <img src={dropbox} alt = "dropbox"/>
        </div>
    </div>
  )
}

export default Brand