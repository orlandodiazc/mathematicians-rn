import { Icons, View } from '@components/Themed';
import { useTheme } from '@react-navigation/native';

import { KeyboardButton } from './KeyboardButton';
import { KeyboardContainer } from './KeyboardContainer';
import { KeyboardText } from './KeyboardText';
import { Row } from './Row';

type UnitsKeyboardProps = { handleKeyboardPress: (buttonId: string) => void };

export default function UnitsKeyboard({
  handleKeyboardPress,
}: UnitsKeyboardProps) {
  const { colors } = useTheme();
  return (
    <KeyboardContainer>
      <Row>
        <KeyboardButton id="7" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="7" />
        </KeyboardButton>
        <KeyboardButton id="8" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="8" />
        </KeyboardButton>
        <KeyboardButton id="9" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="9" />
        </KeyboardButton>
        <KeyboardButton id="C" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="C" style={{ color: colors.primary }} />
        </KeyboardButton>
      </Row>
      <Row>
        <KeyboardButton id="4" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="4" />
        </KeyboardButton>
        <KeyboardButton id="5" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="5" />
        </KeyboardButton>
        <KeyboardButton id="6" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="6" />
        </KeyboardButton>
        <View
          style={{ width: 70, aspectRatio: 1, backgroundColor: 'transparent' }}
        />
      </Row>
      <Row>
        <KeyboardButton id="1" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="1" />
        </KeyboardButton>
        <KeyboardButton id="2" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="2" />
        </KeyboardButton>
        <KeyboardButton id="3" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="3" />
        </KeyboardButton>
        <View
          style={{ width: 70, aspectRatio: 1, backgroundColor: 'transparent' }}
        />
      </Row>
      <Row>
        <KeyboardButton id="00" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="00" />
        </KeyboardButton>
        <KeyboardButton id="0" handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="0" />
        </KeyboardButton>
        <KeyboardButton id="," handleKeyboardPress={handleKeyboardPress}>
          <KeyboardText title="," />
        </KeyboardButton>
        <KeyboardButton id="delete" handleKeyboardPress={handleKeyboardPress}>
          <Icons name="delete" isTinted size={26} />
        </KeyboardButton>
      </Row>
    </KeyboardContainer>
  );
}
