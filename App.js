import { createStackNavigator, createAppContainer } from 'react-navigator';
import Screen1 from '.Screen1'
import Screen2 from '.Screen2'
const app=createStackNavigator({
  Screen1:{screen:Screen1},
  Screen2:{Screen:Screen2}
})

export default createAppContainer(App); 