import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery1Bar = (props: IIcon) => {

  return (
    <Icon
      name='Battery1Bar'

      short_name='Battery1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-160h240v-480H360v480Z"/>
    </Icon>
  );
};

IconMaterialBattery1Bar.displayName = 'OnesyIconMaterialBattery1Bar';

export default IconMaterialBattery1Bar;
