import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrafficW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficW100Filled'

      short_name='Traffic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476.77-260q17.23 0 28.73-11.27 11.5-11.26 11.5-28.5 0-17.23-11.27-28.73-11.26-11.5-28.5-11.5-17.23 0-28.73 11.27-11.5 11.26-11.5 28.5 0 17.23 11.27 28.73 11.26 11.5 28.5 11.5Zm0-180q17.23 0 28.73-11.27 11.5-11.26 11.5-28.5 0-17.23-11.27-28.73-11.26-11.5-28.5-11.5-17.23 0-28.73 11.27-11.5 11.26-11.5 28.5 0 17.23 11.27 28.73 11.26 11.5 28.5 11.5Zm0-180q17.23 0 28.73-11.27 11.5-11.26 11.5-28.5 0-17.23-11.27-28.73-11.26-11.5-28.5-11.5-17.23 0-28.73 11.27-11.5 11.26-11.5 28.5 0 17.23 11.27 28.73 11.26 11.5 28.5 11.5ZM329-172v-104q-35-8-49.5-28.5T265-348h64v-108q-35-8-49.5-28.5T265-528h64v-108q-35-8-49.5-28.5T265-708h64v-80h296v80h70q0 23-17.5 43.5T625-636v108h70q0 23-17.5 43.5T625-456v108h70q0 23-17.5 43.5T625-276v104H329Z"/>
    </Icon>
  );
});

IconMaterialTrafficW100Filled.displayName = 'OnesyIconMaterialTrafficW100Filled';

export default IconMaterialTrafficW100Filled;
