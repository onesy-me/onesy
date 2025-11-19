import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery2Bar = (props: IIcon) => {

  return (
    <Icon
      name='Battery2Bar'

      short_name='Battery2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-240h240v-400H360v400Z"/>
    </Icon>
  );
};

IconMaterialBattery2Bar.displayName = 'OnesyIconMaterialBattery2Bar';

export default IconMaterialBattery2Bar;
