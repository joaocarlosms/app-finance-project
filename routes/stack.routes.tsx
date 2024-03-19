import { NavigationContainer } from '@react-navigation/native';
//import About from '../src/pages/About/about';
import StackRoutes from './index';

export default function Route() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
};
