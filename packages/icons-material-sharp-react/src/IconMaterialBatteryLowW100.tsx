import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryLowW100 = (props: IIcon) => {

  return (
    <Icon
      name='BatteryLowW100'

      short_name='BatteryLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-326v-90h-53v-128h53v-90h643v308H185Zm27-28h468v-252H212v252Z"/>
    </Icon>
  );
};

IconMaterialBatteryLowW100.displayName = 'OnesyIconMaterialBatteryLowW100';

export default IconMaterialBatteryLowW100;
