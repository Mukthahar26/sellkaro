import React, {useEffect, useState} from 'react';
import styles from './styles';
import AppModal from '../../commonComponents/appModal';
import AppInput from '../../commonComponents/AppInput';
import AppButton from '../../commonComponents/AppButton';
import AppText from '../../commonComponents/AppText';

type Props = {
  onClose: () => void;
  visible: boolean;
  placeholder?: string;
  onSubmit: (text: string) => void;
  inputValue: string;
};

const InputModal = ({
  onClose,
  visible,
  placeholder,
  onSubmit,
  inputValue,
}: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    inputValue && setText(inputValue);
  }, [inputValue]);

  const onSubmitText = () => {
    text && onSubmit(text);
  };

  return (
    <AppModal visible={visible} onClose={onClose}>
      <AppInput value={text} onChangeText={setText} placeholder={placeholder} />
      <AppButton style={styles.button} onPress={onSubmitText}>
        <AppText style={styles.label}>Change</AppText>
      </AppButton>
    </AppModal>
  );
};

export default InputModal;
