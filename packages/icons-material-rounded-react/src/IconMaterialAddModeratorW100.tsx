import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100'

      short_name='AddModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-820q5 0 10.5 1t10.5 3l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 60 17.5 115.5t48.5 101q31 45.5 72 79t88 51.5q6 2 9 7.5t1.15 11.31Q474-144 468-142q-6 2-11 0-112-45-178.5-149.5T212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q5.25-2.4 10.5-3.2 5.25-.8 10.5-.8Zm200 688q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM480-478Zm186 212v66q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2 5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-66h66q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-66v-66q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v66h-66q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2h66Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100.displayName = 'OnesyIconMaterialAddModeratorW100';

export default IconMaterialAddModeratorW100;
