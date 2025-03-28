import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateW100'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-232v32-440 408Zm-28 60v-496h240v-108h216v108h240v227q-7-4-13.5-7t-14.5-6v-186H160v440h335q2 8 3.5 14.5T502-172H132Zm268-496h160v-80H400v80ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm0-49 96-96-20-20-62 62v-144h-28v144l-62-62-20 20 96 96Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateW100.displayName = 'OnesyIconMaterialWorkUpdateW100';

export default IconMaterialWorkUpdateW100;
