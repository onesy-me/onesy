import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeW100Filled'

      short_name='AddHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-306v86q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2 5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-86h86q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-86v-86q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v86h-86q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2h86Zm14 134q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM212-312v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q15.68-12 35.84-12Q500-842 516-830l208 158q11.25 8.28 17.63 21.08 6.37 12.8 6.37 27.11V-608q0 8-6 14.5t-15 5.5q-54-2-106.5 19T530-510q-45 45-64.5 104T455-286q2 14-6.5 24T427-252H272q-24.75 0-42.37-17.63Q212-287.25 212-312Z"/>
    </Icon>
  );
});

IconMaterialAddHomeW100Filled.displayName = 'OnesyIconMaterialAddHomeW100Filled';

export default IconMaterialAddHomeW100Filled;
