import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryChargingFull = (props: IIcon) => {

  return (
    <Icon
      name='BatteryChargingFull'

      short_name='BatteryChargingFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-80v-120H560l140-200v120h100L660-80Zm-300-80Zm-80 80v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryChargingFull.displayName = 'OnesyIconMaterialBatteryChargingFull';

export default IconMaterialBatteryChargingFull;
