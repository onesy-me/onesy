import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraW100Filled'

      short_name='Camera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M475-596q-9 0-14-8t0-16l102-178q5-8 13-10.5t16-.5q66 22 120.5 71.5T797-622q5 11 0 18.5t-17 7.5H475Zm-128 67L245-710q-5-8-3-17t8-14q48-42 107.5-64.5T480-828q8 0 18 .5t20 1.5q11 1 15.5 9t-1.5 19L375-529q-5 8-14 8t-14-8ZM163-394q-8 0-15-6t-9-14q-4-19-5.5-35t-1.5-31q0-54 17-105.5t49-98.5q7-9 16-9t15 11l150 264q5 8 0 16t-14 8H163Zm210 245q-71-23-127.5-74.5T161-341q-5-11 .5-18.5T179-367h313q9 0 13.5 8t-.5 16L402-160q-5 8-13 10.5t-16 .5Zm107 17q-8 0-16.5-.5T447-134q-11-2-15.5-10t1.5-18l156-263q5-8 14-8t14 8l99 174q5 8 3 17t-8 14q-48 42-107.5 65T480-132Zm251-146L581-544q-5-8-.5-16t13.5-8h203q8 0 15 6t9 14q3 18 5 35t2 33q0 57-16.5 107T762-276q-7 9-16 9t-15-11Z"/>
    </Icon>
  );
});

IconMaterialCameraW100Filled.displayName = 'OnesyIconMaterialCameraW100Filled';

export default IconMaterialCameraW100Filled;
