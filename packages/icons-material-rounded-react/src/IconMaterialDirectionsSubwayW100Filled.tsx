import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsSubwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSubwayW100Filled'

      short_name='DirectionsSubway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-252q-45 0-76.5-31.5T212-360v-360q0-58 62-83t206-25q144.05 0 206.03 24.97Q748-778.05 748-720v360q0 45-31.5 76.5T640-252l37 25q9 6 5.5 16.5T668-200H292q-11 0-14.5-10.5T283-227l37-25Zm-80-256h226v-196H240v196Zm254 0h226v-196H494v196ZM340.24-340q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm280 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSubwayW100Filled.displayName = 'OnesyIconMaterialDirectionsSubwayW100Filled';

export default IconMaterialDirectionsSubwayW100Filled;
