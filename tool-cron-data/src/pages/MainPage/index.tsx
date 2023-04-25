import NavigationMenu from "components/NavigationMenu";
import { MainWrapper } from "./style"

const MainPage: React.FC = () => {
  return (
    <MainWrapper className="main-wrapper">
      <div className="left-block">
        <NavigationMenu />
      </div>
      <div className="right-block">Right</div>
    </MainWrapper>
  )
}
    
  export default MainPage;