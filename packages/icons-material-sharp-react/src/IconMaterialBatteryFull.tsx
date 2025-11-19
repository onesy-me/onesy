import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFull = (props: IIcon) => {

  return (
    <Icon
      name='BatteryFull'

      short_name='BatteryFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryFull.displayName = 'OnesyIconMaterialBatteryFull';

export default IconMaterialBatteryFull;
