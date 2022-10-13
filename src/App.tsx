import React, {FC} from 'react';
import MainPage from "./pages/MainPage";
import 'normalize.css';
import './styles/styles.css'

const App: FC = () => {
    return (
        <div className='main'>
            <MainPage/>
        </div>
    );
}

export default App;
