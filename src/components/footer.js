import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import logo from './DOI-2x.png'

const Footer = () => (
  <footer
    style={{
      background: '#086996',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        marginBottom: '0',
        marginLeft: '15%',
        padding: '7rem 1.0875rem',
      }}
    >
        <div
          style={{
            float: 'left',
            paddingRight: '1.5rem',
            display: 'block',
          }}
        >
          <a href='https://doi.gov/'>
              <img
                  src={logo}
                  alt={`Department of the Interior logo`}
                  style={{
                    marginRight: rhythm(1 / 2),
                    margin: 'auto',
                    maxWidth: '130px',
                  }}
              />
          </a>
        </div>
      <div
        style={{
          display: 'block',
        }}  
      />
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Information and Data Management
        </Link>
      </h3>
      <p
        style={{
          fontSize: '.8rem',
          color: 'white',
          lineHeight: rhythm(-1),
        }}
      >
        Office of Natural Resources Revenue <br />
        1849 C Street NW MS 5134 <br />
        Washington, D.C. 20240 <br />
        <a
          style={{
            color: 'white',
          }} 
          href="mailto:nrrd@onrr.gov">nrrd@onrr.gov</a>
      </p>
    </div>
  </footer>
)

export default Footer