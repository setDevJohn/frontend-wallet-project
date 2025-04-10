import { useEffect, useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { PiCalendarFill } from "react-icons/pi";
import { RiFileList3Fill } from "react-icons/ri";
import { CiInboxOut } from "react-icons/ci";
import { CiInboxIn } from "react-icons/ci";
import { BsCreditCard } from "react-icons/bs";

import { ExtractComponent, HomeComponent, ProjectionComponent } from "./components";

import { AccountItem, AccountList, BackgroundFocus, Container, CurrentAccount, Footer, FooterIconContainer, FooterIconSpan, Icon,  MainContent, MainDetails, MenuIcon, Month, MonthContainer, Price, PriceContainer, RegisterItem, RegisterList, ToggleAccount } from "./styles";

export function Home () {
  const [monthIndex, setMonthIndex] = useState<number>(0);
  const [accontToggle, setAccontToggle] = useState<boolean>(false);
  const [selectedAccountId, setSelectedAccountId] = useState<number>(1);
  const [showPrice, setShowPrice] = useState<boolean>(false);

  const [menuRegister, setMenuRegister] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'extract' | 'projection'>('home');

  useEffect(() => {
    const date = new Date()
    const currentMonth = date.getMonth()
    setMonthIndex(currentMonth)
  }, []);

  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const accountList = [
    { id: 1, name: 'Principal', value: '500,00'  },
    { id: 2, name: 'Poupança', value: '400,00'  },
    { id: 3, name: 'Investimentos', value: '300,99'  },
  ]

  function handlePrevMonth () {
    if (!monthIndex) return setMonthIndex(11)
    setMonthIndex(prev => prev - 1)
  }

  function handleNextMonth () {
    if (monthIndex === 11) return setMonthIndex(0)
    setMonthIndex(prev => prev + 1) 
  }

  function handleSelectAccount (id: number) {
    setAccontToggle(false)
    setSelectedAccountId(id)
  }

  const registerMenuItems = [
    { name: 'Receitas', path: '', icon: <CiInboxIn size={30} fill="#0f0" /> },
    { name: 'Despesas', path: '', icon: <CiInboxOut size={30} fill="#f00" /> },
    { name: 'Despesas no crédito', path: '', icon: <BsCreditCard size={23} fill="#f00" /> },
  ]

  const selectedComponent = {
    home: <HomeComponent />,
    extract: <ExtractComponent/>,
    projection: <ProjectionComponent/>
  }

  return (
    <Container>
      <MainDetails>
        <MonthContainer>
          <IoMdArrowDropleft fill="#fff" size={26} onClick={handlePrevMonth}/>
          <Month>{months[monthIndex]}</Month>
          <IoMdArrowDropright fill="#fff" size={26} onClick={handleNextMonth}/>
        </MonthContainer>

        <ToggleAccount>
          <CurrentAccount>
            {accountList.find(({id}) => id === selectedAccountId)?.name}
            { accontToggle
              ? <IoMdArrowDropup size={22} onClick={() => setAccontToggle(false)} />
              : <IoMdArrowDropdown size={22} onClick={() => setAccontToggle(true)} />
            }
          </CurrentAccount>

          <AccountList $open={accontToggle}>
            {accountList
              .filter(({id}) => (id !== selectedAccountId))
              .map(({id, name}, i ) => (
                <AccountItem key={i} onClick={() => handleSelectAccount(id)}>
                  {name}
                </AccountItem>
              ))}
          </AccountList>
        </ToggleAccount>

        <PriceContainer>
          <Price>
            {'R$ '}
            {showPrice 
              ? accountList.find(({id}) => id === selectedAccountId)?.value 
              : '.....'
            }
          </Price>

          {showPrice
            ? <RiEyeCloseFill fill="#fff" size={24} onClick={() => setShowPrice(false)} />
            : <BsFillEyeFill fill="#fff" size={24} onClick={() => setShowPrice(true)} />
          }
        </PriceContainer>
      </MainDetails>
      
      <MainContent>
        {selectedComponent[currentPage]}
      </MainContent>

      <Footer>
        {menuRegister && (
          <BackgroundFocus>
            <RegisterList>
              {registerMenuItems.map((item, i) => (
                <RegisterItem key={i}>
                  <span> {item.icon} </span>
                  <span> {item.name} </span>
                </RegisterItem>
              ))}
            </RegisterList>
          </BackgroundFocus>
        )}

        <FooterIconContainer onClick={() => setCurrentPage('extract')}>
          <RiFileList3Fill fill="#fff" size={30}/>

          <FooterIconSpan>Extrato</FooterIconSpan>
        </FooterIconContainer>

        <MenuIcon onClick={() => setMenuRegister(prev => !prev)}>
          <Icon $open={menuRegister}>
            <FaPlus size={30}/>
          </Icon>
        </MenuIcon>

        <FooterIconContainer onClick={() => setCurrentPage('projection')}>
          <PiCalendarFill fill="#fff" size={30} /> 

          <FooterIconSpan>Projeção</FooterIconSpan>
        </FooterIconContainer>
      </Footer>
    </Container>
  )
}