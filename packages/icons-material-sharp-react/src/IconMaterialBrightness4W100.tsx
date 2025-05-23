import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4W100'

      short_name='Brightness4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-320q66.4 0 113.2-46.8T664-480q0-66.4-46.8-113.2T504-640q-17.19 0-33.59 4Q454-632 438-625q42.92 19.92 67.96 58.95Q531-527.01 531-480q0 47-25.04 86.04Q480.92-354.92 438-335q16 7 32.41 11 16.4 4 33.59 4Zm-24 220L367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialBrightness4W100.displayName = 'OnesyIconMaterialBrightness4W100';

export default IconMaterialBrightness4W100;
