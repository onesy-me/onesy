import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging50Filled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryCharging50Filled'

      short_name='BatteryCharging50'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-80v-120H560l140-200v120h100L660-80Zm-380 0v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v320h142q-29 32-45.5 72.5T440-240q0 46 16 87t45 73H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryCharging50Filled.displayName = 'OnesyIconMaterialBatteryCharging50Filled';

export default IconMaterialBatteryCharging50Filled;
