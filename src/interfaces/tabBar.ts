import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../screens/Home';

export interface IRoute {
  key: string;
  name: string;
  params: unknown | undefined;
}

export interface TabBarState {
  history: {
    key: string;
    type: string;
  }[];
  index: number;
  key: string;
  routeNames: string[];
  routes: {
    key: string;
    name: string;
    params: unknown;
    state?: TabBarState;
  }[];
  stale: boolean;
  type: string;
}

export type TabBarNavigatorProp = NavigationProp<RootStackParamList> & {
  emit: (props: {
    type: string;
    target: string;
    canPreventDefault: boolean;
  }) => boolean;
};

export interface TabBarProps {
  state: TabBarState;
  navigation: TabBarNavigatorProp;
}
