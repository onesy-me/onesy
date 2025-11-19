import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery0Bar = (props: IIcon) => {

  return (
    <Icon
      name='Battery0Bar'

      short_name='Battery0Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-80h240v-560H360v560Z"/>
    </Icon>
  );
};

IconMaterialBattery0Bar.displayName = 'OnesyIconMaterialBattery0Bar';

export default IconMaterialBattery0Bar;
