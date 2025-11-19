import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery4Bar = (props: IIcon) => {

  return (
    <Icon
      name='Battery4Bar'

      short_name='Battery4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480h240v-240H360v240ZM280-80v-720h120v-80h160v80h120v720H280Z"/>
    </Icon>
  );
};

IconMaterialBattery4Bar.displayName = 'OnesyIconMaterialBattery4Bar';

export default IconMaterialBattery4Bar;
