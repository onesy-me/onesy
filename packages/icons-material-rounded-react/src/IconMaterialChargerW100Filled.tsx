import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChargerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargerW100Filled'

      short_name='Charger'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m492.85-248.58 76.84-258.44q2.31-7.98-1.86-13.48-4.18-5.5-11.83-5.5h-70v-188.77q0-7.23-6.5-7.73t-8.35 5.12l-76.84 260.34Q392-449 396.17-443.5q4.18 5.5 11.83 5.5h70v186.85q0 7.15 6.5 7.65t8.35-5.08ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialChargerW100Filled.displayName = 'OnesyIconMaterialChargerW100Filled';

export default IconMaterialChargerW100Filled;
