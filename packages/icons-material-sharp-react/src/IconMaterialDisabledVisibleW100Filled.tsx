import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledVisibleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledVisibleW100Filled'

      short_name='DisabledVisible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-139q-60-12-111-42.5T211.5-257Q174-302 153-359t-21-121q0-73 27-136.5T233-727q47-47 110.5-74T480-828q73 0 136.5 27T727-727q47 47 74 110.5T828-480v9q-6-4-14-7t-14-6q-2-131-95-223.5T480-800q-66 0-120.5 24T264-716l253 253q-7 4-13 7.5t-12 7.5L244-696q-36 38-60 95.5T160-480q0 106 61 188t156 115q7 9 16.5 19.5T411-139Zm269-21q59 0 109.5-27t80.5-73q-30-46-80.5-73T680-360q-59 0-109.5 27T490-260q30 46 80.5 73T680-160Zm0 28q-72 0-131.5-35.5T458-260q31-57 90.5-92.5T680-388q72 0 131.5 35.5T902-260q-31 57-90.5 92.5T680-132Zm0-78q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T730-260q0 20-14.5 35T680-210Z"/>
    </Icon>
  );
});

IconMaterialDisabledVisibleW100Filled.displayName = 'OnesyIconMaterialDisabledVisibleW100Filled';

export default IconMaterialDisabledVisibleW100Filled;
