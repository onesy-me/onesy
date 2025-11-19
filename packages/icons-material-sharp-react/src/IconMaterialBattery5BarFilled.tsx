import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery5BarFilled = (props: IIcon) => {

  return (
    <Icon
      name='Battery5BarFilled'

      short_name='Battery5Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-480h240v-160H360v160Z"/>
    </Icon>
  );
};

IconMaterialBattery5BarFilled.displayName = 'OnesyIconMaterialBattery5BarFilled';

export default IconMaterialBattery5BarFilled;
