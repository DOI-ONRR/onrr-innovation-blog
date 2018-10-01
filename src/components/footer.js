import React from 'react'
import { Link } from 'gatsby'

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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          This footer
        </Link>
      </h1>
    </div>
  </footer>
)

export default Footer