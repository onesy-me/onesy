import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery20W100Filled = (props: IIcon) => {

  return (
    <Icon
      name='Battery20W100Filled'

      short_name='Battery20'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Z"/>
    </Icon>
  );
};

IconMaterialBattery20W100Filled.displayName = 'OnesyIconMaterialBattery20W100Filled';

export default IconMaterialBattery20W100Filled;
