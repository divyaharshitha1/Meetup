import {Link} from 'react-router-dom'
import styled from 'styled-components'
import TopicsContext from '../../context/TopicsContext'

const Home = () => (
  <TopicsContext.Consumer>
    {value => {
      const {userName, selectedOption} = value

      /* const onClickRegisterButton = props => {
        const {history} = props
        history.replace('/register')
      } */

      return (
        <MainContainer>
          <HeaderImg>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </HeaderImg>
          <AppContainer>
            {userName === '' ? (
              <>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <RegisterP>Please register for the topic</RegisterP>
                <Link to="/register">
                  <RegisterBtn type="button">Register</RegisterBtn>
                </Link>
              </>
            ) : (
              <>
                <Heading>Hello {userName}</Heading>
                <RegisterP>Welcome to {selectedOption}</RegisterP>
              </>
            )}
            <MeetImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </AppContainer>
        </MainContainer>
      )
    }}
  </TopicsContext.Consumer>
)
export default Home

const MainContainer = styled.div``
const HeaderImg = styled.div`
  margin: 30px;
`
const WebsiteLogo = styled.img``

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 500;
`
const HomeHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 500;
`
const RegisterP = styled.p`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
`
const RegisterBtn = styled.button`
  background-color: #3b82f6;
  color: #ffff;
  font-family: 'Roboto';
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
`
const MeetImg = styled.img`
  margin-bottom: 30px;
`
