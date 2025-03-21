import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketW100'

      short_name='Rocket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-237q-14-42-23.5-85.5T335-411l-54 36q-7 5-10.5 11.5T267-349v143q0 5 3.5 7t7.5 0l94-38Zm102-535q-64 75-89 146t-25 157q0 63 11 120.5T400-240h160q18-51 29-108.5T600-469q0-86-25-157t-89-146l-3-3q-1-1-3-1t-3 1l-3 3Zm6 306q-23 0-38.5-15.5T426-520q0-23 15.5-38.5T480-574q23 0 38.5 15.5T534-520q0 23-15.5 38.5T480-466Zm108 230 94 38q4 2 7.5-.5t3.5-7.5v-142q0-8-3.5-15T679-375l-54-36q-4 45-13.5 89T588-236Zm-87-560q66 70 96.5 151T628-468q0 6 .5 12.5T628-442l65 44q13 8 20.5 21.5T721-348v151q0 16-13.5 25t-28.5 3l-105-43H385l-105 42q-15 6-28-3t-13-25v-151q0-15 7-28.5t20-21.5l66-44v-25q0-96 30.5-177T459-796q4-5 9.5-7t11.5-2q6 0 11.5 2t9.5 7Z"/>
    </Icon>
  );
});

IconMaterialRocketW100.displayName = 'OnesyIconMaterialRocketW100';

export default IconMaterialRocketW100;
