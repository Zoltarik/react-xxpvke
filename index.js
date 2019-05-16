import React, { Component } from 'react';
import { render } from 'react-dom';
import HeaderApp from './components/header-app';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <div>
      <HeaderApp />
      <SearchPanel />
      <TodoList />
    </div>
  )
};

render(<App />, document.getElementById('root'));
