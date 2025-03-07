import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationW100'

      short_name='ScreenRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M518-244 242-520q-18-18.4-18-43.2 0-24.8 18-42.8l112-112q18.4-18 43.2-18 24.8 0 42.8 18l276 276q18 18.4 18 43.2 0 24.8-18 42.8L604-244q-18.4 18-43.2 18-24.8 0-42.8-18Zm20-20q9 9 23 9t23-9l112-112q9-9 9-23t-9-23L420-698q-9-9-23-9t-23 9L262-586q-9 9-9 23t9 23l276 276Zm-59-217Zm1-399 138 138q4 4 4.5 9.5T618-722q-5 5-10 5t-10-5L440-880q-7-7-3.86-15.65 3.15-8.65 12.86-10.27 8-1.08 15.48-1.58 7.47-.5 15.52-.5 89 0 166.5 33.5t136 92q58.5 58.5 92 136T908-480q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98 0-83-31.5-156T763-763q-54-54-127-85.5T480-880Zm0 800L342-218q-4-4-4.5-9.5T342-238q5-5 10-5t10 5L520-80q7 7 4 15.5t-12.82 10.1q-8.08 1.6-15.59 2-7.51.4-15.59.4-88.27 0-166.3-33.44-78.02-33.44-136.42-91.84-58.4-58.4-91.84-136.42Q52-391.73 52-480q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98 0 83 31.5 156T197-197q54 54 127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationW100.displayName = 'OnesyIconMaterialScreenRotationW100';

export default IconMaterialScreenRotationW100;
