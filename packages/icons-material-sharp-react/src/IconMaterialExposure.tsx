import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Exposure'

      short_name='Exposure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560L200-200Zm380-40v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60ZM240-620h200v-60H240v60Z"/>
    </Icon>
  );
});

IconMaterialExposure.displayName = 'OnesyIconMaterialExposure';

export default IconMaterialExposure;
