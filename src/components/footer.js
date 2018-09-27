import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer
    style={{
      background: '#086996',
      height: '200px',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        marginBottom: '0',
        maxWidth: '100%',
        padding: '1.45rem 1.0875rem',
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