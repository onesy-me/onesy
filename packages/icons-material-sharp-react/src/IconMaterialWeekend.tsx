import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeekend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Weekend'

      short_name='Weekend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-440h120v-200h640v200h120v440H40Zm240-240h400v-200h40v-120H240v120h40v200ZM120-240h720v-280h-80v200H200v-200h-80v280Zm360-80Zm0-80Zm0 80Z"/>
    </Icon>
  );
});

IconMaterialWeekend.displayName = 'OnesyIconMaterialWeekend';

export default IconMaterialWeekend;
