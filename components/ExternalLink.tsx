import React, { ReactNode, useCallback } from 'react';
import { Alert, Linking, Pressable } from 'react-native';

type ExternalLinkProps = {
  url: string;
  children: ReactNode;
};

export function ExternalLink({ url, children }: ExternalLinkProps) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Unable to open this link: ${url}`);
    }
  }, [url]);

  return (
    <Pressable role="link" onPress={handlePress}>
      {children}
    </Pressable>
  );
}
