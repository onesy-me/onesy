import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery80Filled = (props: IIcon) => {

  return (
    <Icon
      name='Battery80Filled'

      short_name='Battery80'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
};

IconMaterialBattery80Filled.displayName = 'OnesyIconMaterialBattery80Filled';

export default IconMaterialBattery80Filled;
