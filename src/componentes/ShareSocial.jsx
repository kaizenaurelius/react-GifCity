import React from 'react'
import {FacebookShareButton, WhatsappShareButton, TelegramShareButton } from 'react-share'
import { FacebookIcon } from 'react-share'
import { WhatsappIcon } from 'react-share'
import { TelegramIcon } from 'react-share'

export default function ShareSocial({ url }) {
  return (
    <div>

      <FacebookShareButton url = { url }>

        <FacebookIcon
            logofillColor = 'white'
            round = { true }
            className='share-icon'
            >
        </FacebookIcon>


      </FacebookShareButton>

      <WhatsappShareButton url = { url }>

        <WhatsappIcon 
                logofillColor = 'white'
                round = { true }
                className='share-icon'
                >
            </WhatsappIcon>
    
      </WhatsappShareButton>

    <TelegramShareButton url = { url }>

            <TelegramIcon 
                logofillColor = 'white'
                round = { true }
                className='share-icon'
                >
            </TelegramIcon>

        </TelegramShareButton>


    </div>
  )
}
