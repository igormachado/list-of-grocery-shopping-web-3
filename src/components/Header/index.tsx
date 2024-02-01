import Image from 'next/image'
import headerImg from '../../assets/headerImg.jpg'
import { HeaderContainer, HeaderName } from '@/styles/pages/Header'

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Image src={headerImg} width="1535" height="185" alt="header image" />
        <HeaderName>List of Grocery Shopping</HeaderName>
      </HeaderContainer>
    </>
  )
}
