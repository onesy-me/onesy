import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureZeroFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureZeroFilled'

      short_name='ExposureZero'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-100 0-160-79.5T260-480q0-121 60-200.5T480-760q100 0 160 79.5T700-480q0 121-60 200.5T480-200Zm0-82q66 0 99-60t33-138q0-78-33-138t-99-60q-66 0-99 60t-33 138q0 78 33 138t99 60Z"/>
    </Icon>
  );
});

IconMaterialExposureZeroFilled.displayName = 'OnesyIconMaterialExposureZeroFilled';

export default IconMaterialExposureZeroFilled;
