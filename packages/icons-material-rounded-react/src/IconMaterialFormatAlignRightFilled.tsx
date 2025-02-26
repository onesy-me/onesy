import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatAlignRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightFilled'

      short_name='FormatAlignRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm240 160q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h400q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H400ZM160-440q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm240 160q-17 0-28.5-11.5T360-320q0-17 11.5-28.5T400-360h400q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H400ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightFilled.displayName = 'OnesyIconMaterialFormatAlignRightFilled';

export default IconMaterialFormatAlignRightFilled;
