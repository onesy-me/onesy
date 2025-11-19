import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorWindowFilled = (props: IIcon) => {

  return (
    <Icon
      name='SensorWindowFilled'

      short_name='SensorWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm120-440h120v-40h160v40h120v-240H280v240Zm0 80v240h400v-240H280Zm-40-360v640h480v-640H240Z"/>
    </Icon>
  );
};

IconMaterialSensorWindowFilled.displayName = 'OnesyIconMaterialSensorWindowFilled';

export default IconMaterialSensorWindowFilled;
