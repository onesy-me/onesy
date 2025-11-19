import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSensor = (props: IIcon) => {

  return (
    <Icon
      name='DoorSensor'

      short_name='DoorSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360v-400 560-160Zm-80 40h80v120h240v-560H360v360h-80v-440h400v720H280v-200Zm200-240q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm280-280h80v240h-80v-240ZM520-320H160v-80h360v80Z"/>
    </Icon>
  );
};

IconMaterialDoorSensor.displayName = 'OnesyIconMaterialDoorSensor';

export default IconMaterialDoorSensor;
