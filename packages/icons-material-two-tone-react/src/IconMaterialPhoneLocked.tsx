import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLocked'

      short_name='PhoneLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,5V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v1h-1v5h6V5H20z M19,5h-2V4c0-0.55,0.45-1,1-1s1,0.45,1,1V5z"/><g><path d="M15,17.83c1.29,0.54,2.63,0.89,4,1.07v-2.23l-2.35-0.47L15,17.83z" enableBackground="new" opacity=".3"/><path d="M7.33,5H5.1c0.18,1.37,0.53,2.7,1.07,4L7.8,7.35L7.33,5z" enableBackground="new" opacity=".3"/><path d="M20.2,14.87l-3.67-0.73c-0.5-0.1-0.83,0.2-0.9,0.27l-2.52,2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52 c0.23-0.24,0.33-0.57,0.27-0.9L9.13,3.8C9.04,3.34,8.63,3,8.15,3H4C3.44,3,2.97,3.47,3,4.03C3.17,6.92,4.05,9.63,5.43,12 c1.58,2.73,3.85,4.99,6.57,6.57c2.37,1.37,5.08,2.26,7.97,2.43c0.55,0.03,1.03-0.43,1.03-1v-4.15 C21,15.37,20.66,14.96,20.2,14.87z M5.1,5h2.23L7.8,7.35L6.17,9C5.63,7.7,5.27,6.37,5.1,5z M19,18.9c-1.37-0.18-2.7-0.53-4-1.07 l1.65-1.63L19,16.67V18.9z"/></g></g></g>
    </Icon>
  );
});

IconMaterialPhoneLocked.displayName = 'OnesyIconMaterialPhoneLocked';

export default IconMaterialPhoneLocked;
