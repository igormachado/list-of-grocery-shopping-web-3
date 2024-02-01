import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  width: 1440,
  height: 185,
  flexShrink: 0,
})

export const HeaderName = styled('div', {
  display: 'flex',
  width: '720px',
  color: '$gray100',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '100%',
  letterSpacing: '0.72px',
  textAlign: 'center',
  // justifyContent: 'center',
  marginLeft: 360,
  marginRight: 360,
  marginTop: -50,
})
