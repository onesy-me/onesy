import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorDoorFilled = (props: IIcon) => {

  return (
    <Icon
      name='SensorDoorFilled'

      short_name='SensorDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm460-340q25 0 42.5-17.5T680-480q0-25-17.5-42.5T620-540q-25 0-42.5 17.5T560-480q0 25 17.5 42.5T620-420Z"/>
    </Icon>
  );
};

IconMaterialSensorDoorFilled.displayName = 'OnesyIconMaterialSensorDoorFilled';

export default IconMaterialSensorDoorFilled;
