import React from 'react'
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import Count from './components/Count';



function App() {
  const [count, setCount] = React.useState(0)

  const handleClickCount = () => {
    return setCount(count + 1);
  }
  return (
    <div style={{ display: "flex", gap: 30 }}>

      <AppProvider>
        <Header />
        <Count count={count} handleClickCount={handleClickCount} />
      </AppProvider>
    </ div>
  );
}

export default App;
