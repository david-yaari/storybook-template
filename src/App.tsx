import React from 'react';
import { Button } from './components/Button';
import lightTheme from './themes/lightTheme';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1 className='text-4xl bg-indigo-100'>Hello {name}</h1>
        <Button
          theme={lightTheme}
          title={'Login'}
          role='action'
          //onClick={action('button-click')}
        />
      </div>
    );
  }
}

export default App;
