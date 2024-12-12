import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteFilled'

      short_name='Route'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-487q-35-13-57.5-43.5T120-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T280-607v407h160v-640h320v487q35 13 57.5 43.5T840-240q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-407H520v640H200Z"/>
    </Icon>
  );
});

IconMaterialRouteFilled.displayName = 'OnesyIconMaterialRouteFilled';

export default IconMaterialRouteFilled;
