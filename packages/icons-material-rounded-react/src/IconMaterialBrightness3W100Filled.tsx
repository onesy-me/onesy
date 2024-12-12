import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3W100Filled'

      short_name='Brightness3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M635-705q39 48 61 105.5T718-480q0 62-22 119.5T635-255q-34 41-77 69t-94 40l-18 4q-9 2-18 3t-15.5-5q-6.5-6-6.5-15 0-5 2-9t6-7q66-58 101.5-137.5T551-480q0-88-35.5-167.5T414-785q-4-3-6-7t-2-9q0-9 6.5-15t15.5-5q9 1 18 3l18 4q51 12 94 40t77 69Z"/>
    </Icon>
  );
});

IconMaterialBrightness3W100Filled.displayName = 'OnesyIconMaterialBrightness3W100Filled';

export default IconMaterialBrightness3W100Filled;
