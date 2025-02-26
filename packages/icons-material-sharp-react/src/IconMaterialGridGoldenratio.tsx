import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridGoldenratio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratio'

      short_name='GridGoldenratio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80v-280H80v-80h280v-80H80v-80h280v-280h80v280h80v-280h80v280h280v80H600v80h280v80H600v280h-80v-280h-80v280h-80Zm80-360h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratio.displayName = 'OnesyIconMaterialGridGoldenratio';

export default IconMaterialGridGoldenratio;
