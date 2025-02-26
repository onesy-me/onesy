import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bed'

      short_name='Bed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-200q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v200q0 17-11.5 28.5T840-200q-17 0-28.5-11.5T800-240v-40H160v40q0 17-11.5 28.5T120-200q-17 0-28.5-11.5T80-240Zm440-320h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>
    </Icon>
  );
});

IconMaterialBed.displayName = 'OnesyIconMaterialBed';

export default IconMaterialBed;
