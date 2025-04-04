import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatImageRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRight'

      short_name='FormatImageRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-17 0-28.5-11.5T440-320v-320q0-17 11.5-28.5T480-680h320q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280H480Zm40-80h240v-240H520v240ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm0-160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h160q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280H160Zm0-160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h160q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440H160Zm0-160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h160q17 0 28.5 11.5T360-640q0 17-11.5 28.5T320-600H160Zm0-160q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRight.displayName = 'OnesyIconMaterialFormatImageRight';

export default IconMaterialFormatImageRight;
