import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorDoor = (props: IIcon) => {

  return (
    <Icon
      name='SensorDoor'

      short_name='SensorDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm380-260q25 0 42.5-17.5T680-480q0-25-17.5-42.5T620-540q-25 0-42.5 17.5T560-480q0 25 17.5 42.5T620-420ZM240-160v-640 640Z"/>
    </Icon>
  );
};

IconMaterialSensorDoor.displayName = 'OnesyIconMaterialSensorDoor';

export default IconMaterialSensorDoor;
