import { NavigatorScreenParams } from '@react-navigation/native';

// Define as rotas e os parâmetros aceitos na barra de navegação
export type RootTabParamList = {
  HomeTab: undefined; 
  MapTab: { shelterId?: string }
  ScannerTab: undefined;
};

// Define a estrutura principal
export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<RootTabParamList>;
  PetDetail: { petId: string };
}