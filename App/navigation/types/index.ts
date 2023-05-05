/**
 * types for navigation.
 */

import {StackNavigationOptions} from '@react-navigation/stack';

interface ScreenOptionsNestedTypes {
  component: React.FunctionComponent;
  options: StackNavigationOptions;
}

export interface ScreenOptions {
  [key: string]: ScreenOptionsNestedTypes;
}
