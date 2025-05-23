import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCaptivePortalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptivePortalFilled'

      short_name='CaptivePortal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-183v49q0 17-11.5 28.5T680-94q-17 0-28.5-11.5T640-134v-126q0-25 17.5-42.5T700-320h126q17 0 28.5 11.5T866-280q0 17-11.5 28.5T826-240h-50l90 90q11 11 11 27.5T866-94q-12 12-28.5 12T809-94l-89-89ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 10-.5 22t-1.5 22q-2 17-14 26.5t-30 9.5q-16 0-27-14t-9-30q2-10 2-18v-18q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40v21.5q0 11.5-1 21.5-2 17-14 27t-29 10q-16 0-27.5-13t-9.5-29q1-10 1-19v-19q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h94q17 0 28.5 11.5T520-360q0 17-11.5 28.5T480-320h-76q12 43 31 82.5t45 75.5q10 0 20 .5t20-.5q17-2 28 8.5t11 27.5q0 18-9 30t-26 14q-10 1-22 1.5t-22 .5ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm206 222q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5ZM204-640h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm200 0h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/>
    </Icon>
  );
});

IconMaterialCaptivePortalFilled.displayName = 'OnesyIconMaterialCaptivePortalFilled';

export default IconMaterialCaptivePortalFilled;
