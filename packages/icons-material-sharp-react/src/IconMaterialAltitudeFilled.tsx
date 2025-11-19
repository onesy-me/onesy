import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltitudeFilled = (props: IIcon) => {

  return (
    <Icon
      name='AltitudeFilled'

      short_name='Altitude'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-480v-168l-64 64-56-56 160-160 160 160-56 57-64-64v167h-80ZM40-80l240-320 180 240 64-48-114-152 150-200L920-80H40Z"/>
    </Icon>
  );
};

IconMaterialAltitudeFilled.displayName = 'OnesyIconMaterialAltitudeFilled';

export default IconMaterialAltitudeFilled;
