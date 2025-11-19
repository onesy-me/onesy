import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceBandFilled = (props: IIcon) => {

  return (
    <Icon
      name='DeviceBandFilled'

      short_name='DeviceBand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80v-520h-40v-120h40v-160h320v160h40v120h-40v520H320Z"/>
    </Icon>
  );
};

IconMaterialDeviceBandFilled.displayName = 'OnesyIconMaterialDeviceBandFilled';

export default IconMaterialDeviceBandFilled;
