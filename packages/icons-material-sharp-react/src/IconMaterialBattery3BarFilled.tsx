import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery3BarFilled = (props: IIcon) => {

  return (
    <Icon
      name='Battery3BarFilled'

      short_name='Battery3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-320h240v-320H360v320Z"/>
    </Icon>
  );
};

IconMaterialBattery3BarFilled.displayName = 'OnesyIconMaterialBattery3BarFilled';

export default IconMaterialBattery3BarFilled;
