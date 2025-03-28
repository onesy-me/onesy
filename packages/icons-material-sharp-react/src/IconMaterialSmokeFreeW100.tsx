import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmokeFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokeFreeW100'

      short_name='SmokeFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M812-92 552-352H138v-56h358L112-792l20-20 700 700-20 20Zm-90-260v-56h28v56h-28Zm68 0v-56h28v56h-28Zm-108-24-32-32h32v32Zm40-92v-52q0-35-23-58.5T644-602h-62q-42 0-72-30.85T480-708q0-40.96 30-69.48Q540-806 582-806v28q-30 0-52 19.81t-22 50Q508-678 530-654q22 24 52 24h62q44 0 75 32.5t31 77.5v52h-28Zm68 0v-90q0-66-46-106t-114-40v-28q30 0 51-21t21-51h28q0 29-12 49t-30 30.87Q739-710 778.5-668T818-558v90h-28Z"/>
    </Icon>
  );
});

IconMaterialSmokeFreeW100.displayName = 'OnesyIconMaterialSmokeFreeW100';

export default IconMaterialSmokeFreeW100;
