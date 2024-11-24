import React, {useEffect} from 'react';
import styles from './styles';
import ContainerView from '../../../components/commonComponents/ContainerView';
import {} from 'zustand';
import AppInput from '../../../components/commonComponents/AppInput';
import useAdPostProperties from '../../../Zustand/asyncActions/fetchAdFields';
import {isArray} from '../../../utilities/utils';
import RenderAdProperties from '../../../components/blockComponents/renderAdProprties';

const CreateAd = () => {
  const {adPropertiesList, fetchMenuList} = useAdPostProperties();

  useEffect(() => {
    fetchMenuList();
  }, []);

  return (
    <ContainerView headerName="Create Your Ad" style={styles.container}>
      <AppInput placeholder="Title" />
      {isArray(adPropertiesList) &&
        adPropertiesList.map((item, index) => {
          return <RenderAdProperties key={index} item={item} />;
        })}
      <AppInput
        placeholder="Description"
        multiline={true}
        inputStyle={styles.description}
        style={styles.inputcontainer}
      />
    </ContainerView>
  );
};

export default CreateAd;
