import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffFilled'

      short_name='BedtimeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M563-564q60 60 137 90t162 27q23-1 37.5 15.5T907-395q-11 33-28 64t-39 59q-13 16-33.5 16.5T771-270L270-771q-14-14-14-34t16-34q25-22 53.5-38t61.5-28q22-8 40.5 5.5T445-863q-3 85 27.5 162T563-564ZM748-66l-81-80q-35 13-70.5 19.5T524-120q-84 0-157.5-32t-128-86.5Q184-293 152-366.5T120-524q0-37 6.5-72.5T146-667l-78-78q-12-12-12-29t12-29q12-12 29-12t29 12l678 680q11 12 11 28.5T804-67q-11 11-28 11.5T748-66Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffFilled.displayName = 'OnesyIconMaterialBedtimeOffFilled';

export default IconMaterialBedtimeOffFilled;
