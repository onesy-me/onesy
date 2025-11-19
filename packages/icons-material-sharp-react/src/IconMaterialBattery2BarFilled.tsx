import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery2BarFilled = (props: IIcon) => {

  return (
    <Icon
      name='Battery2BarFilled'

      short_name='Battery2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-240h240v-400H360v400Z"/>
    </Icon>
  );
};

IconMaterialBattery2BarFilled.displayName = 'OnesyIconMaterialBattery2BarFilled';

export default IconMaterialBattery2BarFilled;
