import {Component} from 'react'
import styled from 'styled-components'
import TopicsContext from '../../context/TopicsContext'

class Register extends Component {
  state = {
    username: '',
    selectOption: 'Arts and Culture',
    showSubmitError: false,
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectOption: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state

    return (
      <InputContainer>
        <LabelEle htmlFor="name">NAME</LabelEle>
        <InputEle
          type="text"
          placeholder="Your Name"
          id="name"
          value={username}
          onChange={this.onChangeName}
        />
      </InputContainer>
    )
  }

  renderOptionField = topicsListDetails => {
    const {selectOption} = this.state
    return (
      <InputContainer>
        <LabelEle htmlFor="topics">TOPICS</LabelEle>
        <SelectContainer
          value={selectOption}
          id="topics"
          onChange={this.onChangeOption}
        >
          {topicsListDetails.map(eachItem => (
            <option key={eachItem.id} value={eachItem.displayText}>
              {eachItem.displayText}
            </option>
          ))}
        </SelectContainer>
      </InputContainer>
    )
  }

  render() {
    const {username, selectOption, showSubmitError} = this.state
    return (
      <TopicsContext.Consumer>
        {value => {
          const {updateDetails, topicsListDetails} = value
          const onClickRegisterBtn = () => {
            if (username === '') {
              this.setState({showSubmitError: true})
            } else {
              this.setState({showSubmitError: false})
              updateDetails(username, selectOption)

              const {history} = this.props
              history.replace('/')
            }
          }

          return (
            <MainContainer>
              <HeaderImg>
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </HeaderImg>
              <AppContainer>
                <RegisterContainer>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <FormContainer>
                    <FormHead>Let us Join</FormHead>
                    {this.renderUserNameField()}
                    {this.renderOptionField(topicsListDetails)}
                    <RegisterBtn type="submit" onClick={onClickRegisterBtn}>
                      Register Now
                    </RegisterBtn>
                    {showSubmitError && (
                      <ErrorMsg>Please enter your name</ErrorMsg>
                    )}
                  </FormContainer>
                </RegisterContainer>
              </AppContainer>
            </MainContainer>
          )
        }}
      </TopicsContext.Consumer>
    )
  }
}

export default Register

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
  margin-top: 70px;
`
const RegisterContainer = styled.div`
  display: flex;
`
const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const FormHead = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 700;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelEle = styled.label`
  color: #64748b;
  font-weight: 500;
  font-size: 15px;
  font-family: 'Roboto';
`
const InputEle = styled.input`
  width: 250px;
  box-shadow: 1px 1px 1px 1px #cbd5e1;
  border-radius: 5px;
  padding-left: 8px;
  margin-top: 10px;
  margin-bottom: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
`

const SelectContainer = styled.select`
  width: 250px;
  box-shadow: 1px 1px 1px 1px #cbd5e1;
  border-radius: 5px;
  padding-left: 8px;
  margin-top: 10px;
  margin-bottom: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
`
const RegisterBtn = styled.button`
  background-color: #3b82f6;
  color: #ffff;
  font-family: 'Roboto';
  padding-top: 10px;
  padding-bottom: 10px;
  width: 120px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
`
const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
`
