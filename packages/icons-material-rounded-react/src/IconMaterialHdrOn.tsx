import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOn'

      short_name='HdrOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-390v-180q0-13 8.5-21.5T670-600h110q24 0 42 18t18 42v40q0 23-10.5 35.5T804-444l20 46q6 14-2 26t-24 12q-8 0-15-4t-10-12l-29-64h-44v50q0 13-8.5 21.5T670-360q-13 0-21.5-8.5T640-390Zm60-110h80v-40h-80v40Zm-520 40v70q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390v-180q0-13 8.5-21.5T150-600q13 0 21.5 8.5T180-570v50h80v-50q0-13 8.5-21.5T290-600q13 0 21.5 8.5T320-570v180q0 13-8.5 21.5T290-360q-13 0-21.5-8.5T260-390v-70h-80Zm340 100H410q-13 0-21.5-8.5T380-390v-180q0-13 8.5-21.5T410-600h110q24 0 42 18t18 42v120q0 24-18 42t-42 18Zm-80-60h80v-120h-80v120Z"/>
    </Icon>
  );
});

IconMaterialHdrOn.displayName = 'OnesyIconMaterialHdrOn';

export default IconMaterialHdrOn;
