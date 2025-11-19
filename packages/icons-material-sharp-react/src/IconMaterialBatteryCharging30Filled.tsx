import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging30Filled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryCharging30Filled'

      short_name='BatteryCharging30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-80v-120H560l140-200v120h100L660-80Zm-380 0v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v400h94q-7 19-10.5 39t-3.5 41q0 46 16 87t45 73H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryCharging30Filled.displayName = 'OnesyIconMaterialBatteryCharging30Filled';

export default IconMaterialBatteryCharging30Filled;
