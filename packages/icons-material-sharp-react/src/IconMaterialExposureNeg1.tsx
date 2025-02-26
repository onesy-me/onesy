import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureNeg1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1'

      short_name='ExposureNeg1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-400H120v-80h280v80Zm230 200v-438l-92 66-46-70 164-118h64v560h-90Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1.displayName = 'OnesyIconMaterialExposureNeg1';

export default IconMaterialExposureNeg1;
