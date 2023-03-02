import {
  NotfoundContainer,
  NotfoundImg,
  NotfoundH1,
  NotfoundPara,
} from './styledComponents'

const NotFound = () => (
  <NotfoundContainer>
    <NotfoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotfoundH1>Page Not Found</NotfoundH1>
    <NotfoundPara>
      We are sorry, the page you requested could not be found.
    </NotfoundPara>
  </NotfoundContainer>
)

export default NotFound
