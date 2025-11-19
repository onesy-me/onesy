import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryChargingFullFilled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryChargingFullFilled'

      short_name='BatteryChargingFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-80v-120H560l140-200v120h100L660-80Zm-380 0v-720h120v-80h160v80h120v320q-100 1-170 70.5T440-240q0 46 16 87t45 73H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryChargingFullFilled.displayName = 'OnesyIconMaterialBatteryChargingFullFilled';

export default IconMaterialBatteryChargingFullFilled;
