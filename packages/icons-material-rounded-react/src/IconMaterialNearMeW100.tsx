import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeW100'

      short_name='NearMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m436-438-183-74q-10-4-14-11.81-4-7.82-4-16 0-8.19 4.5-16.19 4.5-8 14.5-12l441.37-168.31q8.63-3.69 17.13-1.37 8.5 2.32 14.68 8.5t8.5 14.68q2.32 8.5-1.42 17.11L563.87-256.66q-3.73 9.33-11.58 13.99-7.85 4.67-16.07 4.67t-16.3-4.56Q511.85-247.12 508-257l-72-181Zm100 174 174-448-450 172 196 80 80 196Zm-80-196Z"/>
    </Icon>
  );
});

IconMaterialNearMeW100.displayName = 'OnesyIconMaterialNearMeW100';

export default IconMaterialNearMeW100;
