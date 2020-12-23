import React from 'react'

export const MoreBtn = ({ title, color, href }) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    style={{
      fontStyle: 'italic',
      fontWeight: '600',
      textDecoration: 'none',
      color: color
    }}
  >
    {title}
  </a>
)
