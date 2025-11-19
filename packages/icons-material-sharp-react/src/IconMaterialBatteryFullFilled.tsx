import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFullFilled = (props: IIcon) => {

  return (
    <Icon
      name='BatteryFullFilled'

      short_name='BatteryFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Z"/>
    </Icon>
  );
};

IconMaterialBatteryFullFilled.displayName = 'OnesyIconMaterialBatteryFullFilled';

export default IconMaterialBatteryFullFilled;
