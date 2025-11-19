import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging30W100 = (props: IIcon) => {

  return (
    <Icon
      name='BatteryCharging30W100'

      short_name='BatteryCharging30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-107v-101h-50l82-165v101h50l-82 165Zm-338-25v-643h90v-53h128v53h90v305q-8 2-14.5 3.5T606-463v-285H354v438h100q-5 16.1-7.5 33.05Q444-260 444-243q0 30 7 58t21 53H326Z"/>
    </Icon>
  );
};

IconMaterialBatteryCharging30W100.displayName = 'OnesyIconMaterialBatteryCharging30W100';

export default IconMaterialBatteryCharging30W100;
