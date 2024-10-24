import React from 'react';
import Tabs from './components/Tabs';

function App() {
  const tabItems = [
    {
      label: 'Tab 1',
      content: 'Tab 1 content is showing here',callback: () => console.log('Tab 1 clicked'),
    },
    {
      label: 'Tab 2',
      content: 'Tab 2 content is showing here', callback: () => console.log('Tab 2 clicked'),
    },
    {
      label: 'Tab 3',
      content: 'Tab 3 content is showing here', callback: () => console.log('Tab 3 clicked'),
    },
  ];

  return (
    <div className="App">
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;
