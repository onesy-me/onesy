import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineStopsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsW100'

      short_name='AirlineStops'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M391-252v-28h74q-1-150-95-261T132-652v-28q128 0 223 84t125 210q29-99 98.5-172.5T739-680H575v-28h213v213h-28v-164q-113 57-190 155.5T493-280h73v28H391Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsW100.displayName = 'OnesyIconMaterialAirlineStopsW100';

export default IconMaterialAirlineStopsW100;
