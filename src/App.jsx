import React from 'react';
import Game from '../project';
import MyApp from './tasks/button';
import Profile from './tasks/task2';
import ShoppingList from './tasks/task3';
import Myapp from './tasks/task4';
import MyAppExtra from './tasks/task5';

const App = () => {
    return (
        <div>
            <Game />
            <MyApp />
            <Profile />
            <ShoppingList/>
            <Myapp/>
            <MyAppExtra/>
          
        </div>
    );
};

export default App;
