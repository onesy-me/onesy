import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarthquake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Earthquake'

      short_name='Earthquake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361-80q-14 0-24.5-7.5T322-108L220-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h130q13 0 23.5 7.5T288-492l66 215 127-571q3-14 14-23t25-9q14 0 25 8.5t14 22.5l87 376 56-179q4-13 14.5-20.5T740-680q13 0 23 7t15 19l50 134h12q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40q-13 0-23-7t-15-19l-19-51-65 209q-4 13-15 21t-25 7q-14-1-24-9.5T601-311l-81-348-121 548q-3 14-13.5 22T361-80Z"/>
    </Icon>
  );
});

IconMaterialEarthquake.displayName = 'OnesyIconMaterialEarthquake';

export default IconMaterialEarthquake;
