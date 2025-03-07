import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsSubwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSubwayW100'

      short_name='DirectionsSubway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-252q-45 0-76.5-31.5T212-360v-360q0-58 62-83t206-25q144 0 206 25t62 83v360q0 45-31.5 76.5T640-252l37 25q9 6 5.5 16.5T668-200H292q-11 0-14.5-10.5T283-227l37-25Zm-80-256h226v-196H240v196Zm400 28H240h480-80Zm-146-28h226v-196H494v196ZM340-340q17 0 28.5-11.5T380-380q0-17-11.5-28.5T340-420q-17 0-28.5 11.5T300-380q0 17 11.5 28.5T340-340Zm280 0q17 0 28.5-11.5T660-380q0-17-11.5-28.5T620-420q-17 0-28.5 11.5T580-380q0 17 11.5 28.5T620-340Zm-300 60h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Zm160-520q-117 0-174 16.5T240-732h480q-9-35-66-51.5T480-800Zm0 68h240-480 240Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSubwayW100.displayName = 'OnesyIconMaterialDirectionsSubwayW100';

export default IconMaterialDirectionsSubwayW100;
