import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useFonts } from 'expo-font';



export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
 const [loaded] = useFonts({
    TTF: require('../assets/fonts/TT Firs Neue Trial Black.ttf'),
    Dan: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 17,
    fontFamily: 'Dan',
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: 'TTF',
    marginLeft:5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
