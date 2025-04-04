import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationW100Filled'

      short_name='ScreenRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M518-244 242-520q-18-18-18-43t18-43l112-112q18-18 43-18t43 18l276 276q18 18 18 43t-18 43L604-244q-18 18-43 18t-43-18Zm-38-636 138 138q4 4 4.5 9.5T618-722q-5 5-10 5t-10-5L440-880q-7-7-4-15.5t13-10.5q8-1 15.5-1.5t15.5-.5q89 0 166.5 33.5t136 92q58.5 58.5 92 136T908-480q0 6-4 10t-10 4q-6 0-10-4t-4-10q0-83-31.5-156T763-763q-54-54-127-85.5T480-880Zm0 800L342-218q-4-4-4.5-9.5T342-238q5-5 10-5t10 5L520-80q7 7 4 15.5T511-54q-8 1-15.5 1.5T480-52q-88 0-166-33.5t-136.5-92Q119-236 85.5-314T52-480q0-6 4-10t10-4q6 0 10 4t4 10q0 83 31.5 156T197-197q54 54 127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationW100Filled.displayName = 'OnesyIconMaterialScreenRotationW100Filled';

export default IconMaterialScreenRotationW100Filled;
