import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import './static/scss/app.scss'
import 'rodal/lib/rodal.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-datetime/css/react-datetime.css'
import 'react-select/dist/react-select.css'
import './util/requestNextAnimationFrame'

import Routes from './routes'

render(<Routes />, document.getElementById('root'))
