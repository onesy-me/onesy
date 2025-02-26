import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tv'

      short_name='Tv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTv.displayName = 'OnesyIconMaterialTv';

export default IconMaterialTv;
