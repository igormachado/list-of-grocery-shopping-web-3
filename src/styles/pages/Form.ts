import { styled } from '@stitches/react'

export const FormContainer = styled('form', {
  display: 'flex',
  width: 720,
  alignItems: 'flex-end',
  gap: 12,
  marginLeft: 360,
  marginRight: 360,
})

export const InputItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
  flex: '1 0 0',

  input: {
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',

    borderRadius: 6,
    border: '1px solid $gray300',
    background: '$gray500',
    color: '$gray200',
  },

  span: {
    color: '$gray200',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: 0.36,
  },
})

export const Quantity = styled('div', {
  display: 'flex',
  width: 80,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
  flexShrink: 0,
  marginLeft: 12,

  span: {
    color: '$gray200',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: 0.36,
  },

  input: {
    width: 79,
    height: 40,
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    gap: 8,
    flex: '1 0 0',

    borderRadius: '6px 0 0 6px',
    border: '1px solid $gray300',
    background: '$gray500',

    color: '$gray100',
    fontSize: 14,
    fontWeight: 400,
  },

  select: {
    display: 'flex',
    width: 72,
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },
})

export const SelectCategory = styled('div', {
  display: 'flex',
  width: 168,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
  flexShrink: 0,

  label: {
    color: '$gray200',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: 0.36,
  },

  select: {
    width: 168,
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',

    borderRadius: 6,
    border: '1px solid $gray300',
    background: '$gray400',

    color: '$gray200',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '100%',
  },
})

export const Button = styled('button', {
  display: 'flex',
  padding: 8,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 6,
  width: 40,
  height: 40,
  marginRight: 40,

  borderRadius: '999px',
  background: '$purple',
  textDecoration: 'none',
  color: '$gray100',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    background: '$purpleLight',
    transition: '0.2s',
  },

  span: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
