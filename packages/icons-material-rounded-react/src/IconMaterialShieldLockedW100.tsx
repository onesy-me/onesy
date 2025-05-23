import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedW100'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-515v-167q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 7-4.39 10.5-4.38 3.5-9.65 3.5-5.96 0-9.96-3.85-4-3.85-4-10.15v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132q7.17-2.2 15-5.23 7.83-3.02 15-5.77 5-2 10.33 0 5.34 2 7.67 7 2 5 0 10.33-2 5.34-7 7.67-5 2-9.62 4.41-4.62 2.4-8.38 4.59-5 2-11 3t-11 1q-5 0-11-1t-11.02-3Q346-186 279.5-290 213-394 212-515Zm437 383q-14 0-25-11t-11-25v-106q0-14 11-24t25-10h4v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h4q14.41 0 24.71 10Q828-288 828-274v106q0 14-10.29 25-10.3 11-24.71 11H649Zm32-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40ZM480-479Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedW100.displayName = 'OnesyIconMaterialShieldLockedW100';

export default IconMaterialShieldLockedW100;
