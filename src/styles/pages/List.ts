import { styled } from '..'

export const ListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: 360,
  paddingRight: 360,
  paddingTop: 20,
  color: 'white',
})

export const ContentList = styled('div', {
  display: 'flex',
  alignContent: 'space-between',
  justifyContent: 'space-between',
  // marginBottom: 5,
  backgroundColor: '$gray400',
  width: 680,
  height: 68,
  padding: 16,
})

export const Frame01 = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  width: 234,
  height: 36,

  button: {
    display: 'flex',
    width: 24,
    height: 24,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray500',
    border: 'none',
    cursor: 'pointer',
  },

  img: {
    width: 16,
    height: 16,
    flexShrink: 0,
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 2,
  },
})
export const Frame02 = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginLeft: 330,
  width: 115,
  height: 32,

  p: {
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,

    img: {
      width: 16,
      height: 16,
      border: '$orange',
    },
  },

  span: {
    color: '$orange',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '130%',
  },

  img: {
    width: 20,
    height: 20,
  },
})
