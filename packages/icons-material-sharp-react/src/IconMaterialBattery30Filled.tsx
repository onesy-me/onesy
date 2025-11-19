import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery30Filled = (props: IIcon) => {

  return (
    <Icon
      name='Battery30Filled'

      short_name='Battery30'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
};

IconMaterialBattery30Filled.displayName = 'OnesyIconMaterialBattery30Filled';

export default IconMaterialBattery30Filled;
