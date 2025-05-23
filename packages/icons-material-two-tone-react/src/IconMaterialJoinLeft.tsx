import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinLeft'

      short_name='JoinLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><ellipse cx="12" cy="12" rx="3" ry="5.74"/></g><g><path d="M7.5,12c0-0.97,0.23-4.16,3.03-6.5C9.75,5.19,8.9,5,8,5c-3.86,0-7,3.14-7,7s3.14,7,7,7c0.9,0,1.75-0.19,2.53-0.5 C7.73,16.16,7.5,12.97,7.5,12z"/></g><g><path d="M16,5c-0.9,0-1.75,0.19-2.53,0.5c0.61,0.51,1.1,1.07,1.49,1.63C15.29,7.05,15.64,7,16,7c2.76,0,5,2.24,5,5s-2.24,5-5,5 c-0.36,0-0.71-0.05-1.04-0.13c-0.39,0.56-0.88,1.12-1.49,1.63C14.25,18.81,15.1,19,16,19c3.86,0,7-3.14,7-7S19.86,5,16,5z"/></g></g></g>
    </Icon>
  );
});

IconMaterialJoinLeft.displayName = 'OnesyIconMaterialJoinLeft';

export default IconMaterialJoinLeft;
