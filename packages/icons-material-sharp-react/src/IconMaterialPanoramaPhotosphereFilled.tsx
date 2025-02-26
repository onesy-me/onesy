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
      <path d="M480-80q-121 0-216.5-63.5T120-308l-80-38v-268l80-38q48-101 143.5-164.5T480-880q121 0 216.5 63.5T840-652l80 38v268l-80 38q-48 101-143.5 164.5T480-80Zm0-80q69 0 131-28.5T718-268q-59 14-118.5 21T480-240q-60 0-119.5-7T242-268q45 51 107 79.5T480-160Zm0-640q-69 0-131 28.5T242-692q59-14 118.5-21t119.5-7q60 0 119.5 7T718-692q-45-51-107-79.5T480-800Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereFilled.displayName = 'OnesyIconMaterialPanoramaPhotosphereFilled';

export default IconMaterialPanoramaPhotosphereFilled;
