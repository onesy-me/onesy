import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarthquakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarthquakeW100Filled'

      short_name='Earthquake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-132q-4.8 0-8.4-3-3.6-3-5.6-8l-98-323H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h120q4.59 0 8.29 2.5Q278-489 280-484l87 282 137-614q1.02-5.25 4.75-8.63 3.74-3.37 8.5-3.37 4.75 0 8.27 3.29 3.52 3.29 4.48 8.71l101 431 77-247q2-5 5.71-8 3.7-3 8.29-3 5 0 8 2.5t5 7.5l53 139h25q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-36q-5 0-8.2-2.42-3.2-2.43-4.8-6.58l-41-111-81 258q-2 5-5 8t-8 3q-5 0-8.91-3.4-3.92-3.4-5.09-8.6l-98-422-135 607q-2 5-5.6 8.29-3.6 3.3-8.4 3.71Z"/>
    </Icon>
  );
});

IconMaterialEarthquakeW100Filled.displayName = 'OnesyIconMaterialEarthquakeW100Filled';

export default IconMaterialEarthquakeW100Filled;
