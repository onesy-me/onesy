import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMuteFilled = (props: IIcon) => {

  return (
    <Icon
      name='VolumeMuteFilled'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360H320q-17 0-28.5-11.5T280-400v-160q0-17 11.5-28.5T320-600h120l132-132q19-19 43.5-8.5T640-703v446q0 27-24.5 37.5T572-228L440-360Z"/>
    </Icon>
  );
};

IconMaterialVolumeMuteFilled.displayName = 'OnesyIconMaterialVolumeMuteFilled';

export default IconMaterialVolumeMuteFilled;
