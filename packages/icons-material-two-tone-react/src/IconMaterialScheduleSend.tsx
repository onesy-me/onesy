import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSend'

      short_name='ScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M5,10.5l6,1.5l-6,1.5v3.49l5.39-2.27c0.6-1.73,1.86-3.16,3.48-3.97L5,7.01V10.5 z" enableBackground="new" opacity=".3"/><g><path d="M11,12l-6-1.5V7.01l8.87,3.74c0.94-0.47,2-0.75,3.13-0.75c0.1,0,0.19,0.01,0.28,0.01L3,4v16l7-2.95c0-0.02,0-0.03,0-0.05 c0-0.8,0.14-1.56,0.39-2.28L5,16.99V13.5L11,12z"/><path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.65,19.35l-2.15-2.15V14h1v2.79l1.85,1.85 L18.65,19.35z"/></g></g>
    </Icon>
  );
});

IconMaterialScheduleSend.displayName = 'OnesyIconMaterialScheduleSend';

export default IconMaterialScheduleSend;
