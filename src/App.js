import './App.css';
import Header from './Home/Header/Header';
import MainPage from './Home/MainPage/MainPage';
import Description from './Home/MainPage/SideBar/Description/Description';


function App() {
    return (
      <div className='Home'>
        <Header />
        <MainPage />
        <Description />
      </div>
    )
  }

export default App;
