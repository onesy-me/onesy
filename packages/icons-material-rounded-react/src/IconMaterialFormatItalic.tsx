import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatItalic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalic'

      short_name='FormatItalic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-200q-21 0-35.5-14.5T200-250q0-21 14.5-35.5T250-300h110l120-360H370q-21 0-35.5-14.5T320-710q0-21 14.5-35.5T370-760h300q21 0 35.5 14.5T720-710q0 21-14.5 35.5T670-660h-90L460-300h90q21 0 35.5 14.5T600-250q0 21-14.5 35.5T550-200H250Z"/>
    </Icon>
  );
});

IconMaterialFormatItalic.displayName = 'OnesyIconMaterialFormatItalic';

export default IconMaterialFormatItalic;
