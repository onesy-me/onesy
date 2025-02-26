import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaPhotosphereFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereFilled'

      short_name='PanoramaPhotosphere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-121 0-216.5-63.5T120-308q-11-5-20-9t-18-9q-20-11-31-29t-11-41v-168q0-23 11-41t31-29q9-5 18-9t20-9q48-101 143.5-164.5T480-880q121 0 216.5 63.5T840-652q11 5 20 9t18 9q20 11 31 29.5t11 40.5v168q0 22-11 40.5T878-326q-9 5-18 9t-20 9q-48 101-143.5 164.5T480-80Zm0-80q69 0 131-28.5T718-268q-59 14-118.5 21T480-240q-60 0-119.5-7T242-268q45 51 107 79.5T480-160Zm0-640q-69 0-131 28.5T242-692q59-14 118.5-21t119.5-7q60 0 119.5 7T718-692q-45-51-107-79.5T480-800Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereFilled.displayName = 'OnesyIconMaterialPanoramaPhotosphereFilled';

export default IconMaterialPanoramaPhotosphereFilled;
