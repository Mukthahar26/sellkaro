import React, {useEffect, useState} from 'react';
import AppText from '../../commonComponents/AppText';
import styles from './styles';

type Props = {
  description: string;
  properties: any[];
};

const TypeOfAdData = ({description, properties}: Props) => {
  const [showProperties, setShowProperties] = useState('');
  const length = properties && properties.length;

  useEffect(() => {
    let labels = '';
    if (length)
      properties.map((item, index) => {
        const {label, value} = item;
        labels =
          labels + `${label} : ${value} ${length - 1 !== index ? '| ' : ''}`;
      });
    setShowProperties(labels);
  }, []);

  return length ? (
    <AppText style={styles.propertiesStyle} numberOfLines={1}>
      {showProperties}
    </AppText>
  ) : (
    <AppText style={styles.propertiesStyle} numberOfLines={1}>
      {description}
    </AppText>
  );
};

export default TypeOfAdData;
