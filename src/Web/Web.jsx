import React from 'react'
import { Helmet } from 'react-helmet'
import { Styles } from './Styles'

export const Web = () => {
  return (
    <Styles>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,400&display=swap'
          rel='stylesheet'></link>
      </Helmet>
      <div>
        <img src='./img/gruvlogo.svg' alt='GruvDev logo' />
      </div>
    </Styles>
  )
}
