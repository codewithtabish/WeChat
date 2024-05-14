import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@react-navigation/native';

const AppThemedProvider = ({ children }: any) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      <StatusBar style='dark' />
    </>
  );
};

export default AppThemedProvider;
