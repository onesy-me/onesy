import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPottedPlantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantW100Filled'

      short_name='PottedPlant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M364-132q-22 0-38.5-13.5T302-179l-42-167h438l-42 167q-7 20-23.5 33.5T594-132H364Zm115-502q10-69 57-119t114.3-66.8q3.7-1.2 7.2-.2t6.5 4q3 3 4 6.54 1 3.53 0 7.46-18 63-64.5 108T493-635v102h265q12.75 0 21.38 8.62Q788-515.75 788-503v63.5q0 26.19-18.8 44.85Q750.4-376 724-376H236q-26.4 0-45.2-18.59-18.8-18.59-18.8-44.69v-63.27q0-13.45 8.63-21.95 8.62-8.5 21.37-8.5h263v-102q-64-14-110.5-59T290-802q-1-3.93 0-7.46 1-3.54 4-6.54t7-4q4-1 7.7.27Q376-802 422-752t57 118Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantW100Filled.displayName = 'OnesyIconMaterialPottedPlantW100Filled';

export default IconMaterialPottedPlantW100Filled;
