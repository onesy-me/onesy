import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDining'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="9.83,5 7.03,7.73 7.12,9 16.87,9 16.96,7.73 14.16,5"/><polygon opacity=".3" points="7.79,18 16.23,18 16.74,11 7.28,11"/><path d="M20.59,6.05L19,7.63l0.03-0.56L14.98,3H9.02L4.97,7.07L5,7.57L3.41,6.01L2,7.44l3.23,3.11L5.93,20h12.14l0.7-9.44L22,7.46 L20.59,6.05z M16.23,18H7.79l-0.51-7h9.46L16.23,18z M16.87,9H7.12L7.03,7.73L9.83,5h4.33l2.8,2.73L16.87,9z"/></g></g>
    </Icon>
  );
});

IconMaterialTakeoutDining.displayName = 'OnesyIconMaterialTakeoutDining';

export default IconMaterialTakeoutDining;
