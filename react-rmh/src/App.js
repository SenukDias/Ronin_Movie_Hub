import React, {useState} from 'react';
import styled from 'styled-components';

import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margine: 0 auto;
`;




function App() {
  

    const [isLampOneOn, setIsLampOneOn] = useState(false);

    const [isLampTwoOn, setIsLampTwoOn] = useState(true);
    
    const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
    const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

    return(
      <Room>
        <Lamp lampOn={isLampOneOn} position='left'/>
        <Lamp lampOn={isLampTwoOn} position='right'/>
        <LightSwitch
          name ='one'
          callback = {handleLightSwitchOne}
          switchOn = {isLampOneOn}
          position='left'
        />
        <LightSwitch
          name ='two'
          callback = {handleLightSwitchTwo}
          switchOn = {isLampTwoOn}
          position='right'
        />

      </Room>
    )
    
  
}

export default App;
