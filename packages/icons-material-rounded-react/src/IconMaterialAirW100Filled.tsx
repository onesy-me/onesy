import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirW100Filled'

      short_name='Air'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-198q-26 0-47.5-13T378-247q-4-6 .5-12.5T391-266q4 0 7.5 2t5.5 6q9 14 24 23t32 9q27 0 46.5-19.5T526-292q0-27-19.5-46.5T460-358H120q-6 0-10-4t-4-10q0-6 4-10t10-4h340q39 0 66.5 27.5T554-292q0 39-27.5 66.5T460-198ZM120-574q-6 0-10-4t-4-10q0-6 4-10t10-4h500q35 0 60.5-25.5T706-688q0-35-25.5-60.5T620-774q-26 0-47.5 14T541-722q-2 4-5 6t-7 2q-8 0-13-6t-2-14q14-32 42.5-50t63.5-18q48 0 81 33t33 81q0 48-33 81t-81 33H120Zm666 300q-8 3-14-2t-6-13q0-4 2-7t6-5q24-10 38-31.5t14-47.5q0-35-25.5-60.5T740-466H120q-6 0-10-4t-4-10q0-6 4-10t10-4h620q48 0 81 33t33 81q0 35-18 63.5T786-274Z"/>
    </Icon>
  );
});

IconMaterialAirW100Filled.displayName = 'OnesyIconMaterialAirW100Filled';

export default IconMaterialAirW100Filled;
