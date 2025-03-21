import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledVisibleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledVisibleW100'

      short_name='DisabledVisible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160q59 0 109.5-27t80.5-73q-30-46-80.5-73T680-360q-59 0-109.5 27T490-260q30 46 80.5 73T680-160Zm0 28q-57 0-107-23t-85-62q-8-9-11.5-20t-3.5-22q0-11 3.5-23t11.5-21q34-39 84.5-62T680-388q57 0 107 23t85 62q8 9 11.5 20t3.5 22q0 11-3.5 23T872-217q-34 39-84.5 62T680-132Zm0-78q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T730-260q0 20-14.5 35T680-210Zm-314 59q-107-35-170.5-126T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q149 0 246 99t102 245q1 7-3.5 11t-9.5 4q-5 0-10-3.5t-5-11.5q-2-131-95.5-223.5T480-800q-66 0-120.5 24T264-716l240 240q5 5 4.5 10.5T504-456q-4 4-9.5 4.5T484-456L244-696q-36 38-60 95.5T160-480q0 106 61 188t156 115q6 2 8 7t0 10q-2 5-6.5 8t-12.5 1Z"/>
    </Icon>
  );
});

IconMaterialDisabledVisibleW100.displayName = 'OnesyIconMaterialDisabledVisibleW100';

export default IconMaterialDisabledVisibleW100;
