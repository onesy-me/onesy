import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatUnderlined = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlined'

      short_name='FormatUnderlined'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-17 0-28.5-11.5T200-160q0-17 11.5-28.5T240-200h480q17 0 28.5 11.5T760-160q0 17-11.5 28.5T720-120H240Zm240-160q-101 0-157-63t-56-167v-279q0-21 15.5-36t36.5-15q21 0 36 15t15 36v285q0 56 28 91t82 35q54 0 82-35t28-91v-285q0-21 15.5-36t36.5-15q21 0 36 15t15 36v279q0 104-56 167t-157 63Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlined.displayName = 'OnesyIconMaterialFormatUnderlined';

export default IconMaterialFormatUnderlined;
