import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCircleNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotifications'

      short_name='CircleNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8c4.41,0,8-3.59,8-8S16.41,4,12,4z M12,18.5 c-0.83,0-1.5-0.67-1.5-1.5h3C13.5,17.83,12.83,18.5,12,18.5z M17,16H7v-2h1v-2.61C8,9.27,9.03,7.47,11,7V6.5c0-0.57,0.43-1,1-1 s1,0.43,1,1V7c1.97,0.47,3,2.28,3,4.39V14h1V16z" enableBackground="new" opacity=".3"/><path d="M12,18.5c0.83,0,1.5-0.67,1.5-1.5h-3C10.5,17.83,11.17,18.5,12,18.5z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10 c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8c4.41,0,8,3.59,8,8S16.41,20,12,20z M16,11.39 c0-2.11-1.03-3.92-3-4.39V6.5c0-0.57-0.43-1-1-1s-1,0.43-1,1V7c-1.97,0.47-3,2.27-3,4.39V14H7v2h10v-2h-1V11.39z M14,14h-4v-3 c0-1.1,0.9-2,2-2s2,0.9,2,2V14z"/></g>
    </Icon>
  );
});

IconMaterialCircleNotifications.displayName = 'OnesyIconMaterialCircleNotifications';

export default IconMaterialCircleNotifications;
