import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeOfTravelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOfTravelFilled'

      short_name='ModeOfTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552l56-56q11-11 28-11t28 11q11 11 11 28t-11 28L788-428q-12 12-28 12t-28-12L608-552q-11-11-11-28t11-28q11-11 28-11t28 11l56 56q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q20-18 37-35l34-34q-5-10-8-21.5t-3-23.5q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-8 0-14.5-1t-13.5-3q-15 16-33.5 33.5T533-127q-11 10-25 15t-28 5Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravelFilled.displayName = 'OnesyIconMaterialModeOfTravelFilled';

export default IconMaterialModeOfTravelFilled;
