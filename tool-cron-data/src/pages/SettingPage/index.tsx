import NavigationMenu from "components/NavigationMenu";
import { MainWrapper } from "pages/MainPage/style"

const SettingPage: React.FC = () => {
  return (
    <MainWrapper className="main-wrapper">
      <div className="left-block">
        <NavigationMenu />
      </div>
      <div className="right-block">Setting Page</div>
    </MainWrapper>
  )
}
    
  export default SettingPage;