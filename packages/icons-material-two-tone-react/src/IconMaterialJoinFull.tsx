import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinFull'

      short_name='JoinFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><ellipse cx="12" cy="12" rx="3" ry="5.74"/><path d="M7.5,12c0-0.97,0.23-4.16,3.03-6.5C9.75,5.19,8.9,5,8,5c-3.86,0-7,3.14-7,7s3.14,7,7,7c0.9,0,1.75-0.19,2.53-0.5 C7.73,16.16,7.5,12.97,7.5,12z"/><path d="M16,5c-0.9,0-1.75,0.19-2.53,0.5c2.8,2.34,3.03,5.53,3.03,6.5c0,0.97-0.23,4.16-3.03,6.5C14.25,18.81,15.1,19,16,19 c3.86,0,7-3.14,7-7S19.86,5,16,5z"/></g></g>
    </Icon>
  );
});

IconMaterialJoinFull.displayName = 'OnesyIconMaterialJoinFull';

export default IconMaterialJoinFull;
