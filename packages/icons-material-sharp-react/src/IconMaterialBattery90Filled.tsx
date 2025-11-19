import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery90Filled = (props: IIcon) => {

  return (
    <Icon
      name='Battery90Filled'

      short_name='Battery90'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
};

IconMaterialBattery90Filled.displayName = 'OnesyIconMaterialBattery90Filled';

export default IconMaterialBattery90Filled;
