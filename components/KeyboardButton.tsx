import { ReactNode } from 'react';

import { IconButton } from './ui/IconButton';

type KeyboardButtonProps = {
  children: ReactNode;
  handleKeyboardPress: (id: string) => void;
  id: string;
};

export function KeyboardButton({
  children,
  handleKeyboardPress,
  id,
}: KeyboardButtonProps) {
  return (
    <IconButton onPress={() => handleKeyboardPress(id)} size={70}>
      {children}
    </IconButton>
  );
}
