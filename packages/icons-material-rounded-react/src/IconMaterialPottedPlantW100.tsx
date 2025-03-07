import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPottedPlantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantW100'

      short_name='PottedPlant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M364-160h230q13 0 22-7.5t13-18.5l48-191H281l48 191q4 11 13 18.5t22 7.5Zm0 28q-22 0-39-13t-23-34l-50-198h454l-50 198q-6 20-23 33.5T594-132H364ZM236-405h488q16 0 26-10t10-25v-65H200v65q0 15 10.5 25t25.5 10Zm243-229q0-70 50.5-119T650-820q4-1 7.5 0t6.5 4q3 3 4 6.5t0 7.5q-18 63-64.5 108T493-635v102h265q13 0 21.5 8.5T788-503v63q0 26-19 44.5T724-377H236q-26 0-45-18.5T172-440v-63q0-13 8.5-21.5T202-533h263v-102q-64-14-110.5-59T290-802q-1-4 0-7.5t4-6.5q3-3 6.5-4t7.5 0q70 18 120.5 67T479-634Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantW100.displayName = 'OnesyIconMaterialPottedPlantW100';

export default IconMaterialPottedPlantW100;
