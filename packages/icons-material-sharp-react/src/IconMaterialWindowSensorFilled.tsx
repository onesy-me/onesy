import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowSensorFilled = (props: IIcon) => {

  return (
    <Icon
      name='WindowSensorFilled'

      short_name='WindowSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-600q-17 0-28.5-11.5T840-640v-160q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600ZM120-120v-720h640v720H120Zm120-400h160v-40h80v40h160v-200H240v200Zm0 280h400v-200H240v200Zm-40 40h480v-560H200v560Z"/>
    </Icon>
  );
};

IconMaterialWindowSensorFilled.displayName = 'OnesyIconMaterialWindowSensorFilled';

export default IconMaterialWindowSensorFilled;
