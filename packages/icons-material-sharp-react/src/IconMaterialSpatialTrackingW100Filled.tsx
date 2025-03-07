import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialTrackingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialTrackingW100Filled'

      short_name='SpatialTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-492q-44.55 0-76.27-31.72Q372-555.45 372-600t31.73-76.28Q435.45-708 480-708t76.28 31.72Q588-644.55 588-600t-31.72 76.28Q524.55-492 480-492ZM212-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T480-388q54 0 112 14.5T698-336q24 11 37 28.5t13 43.5v52H212ZM39-727v-28q35 0 64.5-13t52.5-36q23-23 35.5-53t12.5-64h27q0 40.25-15 75.63Q201-810 175-784t-61.05 41.5Q78.89-727 39-727Zm0 127v-28q61 0 113.5-23t92.5-63q40-40 63-93.03 23-53.02 23-113.97h29q0 66-25 124.5T266-694q-44 44-102 69T39-600Zm881 0q-65.79 0-124.11-25-58.32-25-102.18-69-43.87-44-68.79-102.5Q600-855 600-921h28q0 61 23.08 113.84t63.16 92.92q40.08 40.08 92.92 63.16T920-628v28Zm0-127q-40.25 0-75.63-15.5Q809-758 783-784t-41-61.37q-15-35.38-15-75.63h28q0 34 12.5 64t35.5 53q23 23 53 36t64 13v28Z"/>
    </Icon>
  );
});

IconMaterialSpatialTrackingW100Filled.displayName = 'OnesyIconMaterialSpatialTrackingW100Filled';

export default IconMaterialSpatialTrackingW100Filled;
