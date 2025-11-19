import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery4BarFilled = (props: IIcon) => {

  return (
    <Icon
      name='Battery4BarFilled'

      short_name='Battery4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480h240v-240H360v240ZM280-80v-720h120v-80h160v80h120v720H280Z"/>
    </Icon>
  );
};

IconMaterialBattery4BarFilled.displayName = 'OnesyIconMaterialBattery4BarFilled';

export default IconMaterialBattery4BarFilled;
