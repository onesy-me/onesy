import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery20Filled = (props: IIcon) => {

  return (
    <Icon
      name='Battery20Filled'

      short_name='Battery20'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
};

IconMaterialBattery20Filled.displayName = 'OnesyIconMaterialBattery20Filled';

export default IconMaterialBattery20Filled;
