import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery50W100Filled = (props: IIcon) => {

  return (
    <Icon
      name='Battery50W100Filled'

      short_name='Battery50'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Z"/>
    </Icon>
  );
};

IconMaterialBattery50W100Filled.displayName = 'OnesyIconMaterialBattery50W100Filled';

export default IconMaterialBattery50W100Filled;
