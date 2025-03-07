import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialValve = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Valve'

      short_name='Valve'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-760H320q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H520v80q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680v-80ZM160-159v-242q0-17 11.5-28.5T200-441q17 0 28.5 11.5T240-401v1h120v-120h-1q-17 0-28.5-11.5T319-560q0-17 11.5-28.5T359-600h242q17 0 28.5 11.5T641-560q0 17-11.5 28.5T601-520h-1v120h120v-1q0-17 11.5-28.5T760-441q17 0 28.5 11.5T800-401v242q0 17-11.5 28.5T760-119q-17 0-28.5-11.5T720-159v-1H240v1q0 17-11.5 28.5T200-119q-17 0-28.5-11.5T160-159Zm80-81h480v-80H520v-200h-80v200H240v80Zm240 0Z"/>
    </Icon>
  );
});

IconMaterialValve.displayName = 'OnesyIconMaterialValve';

export default IconMaterialValve;
