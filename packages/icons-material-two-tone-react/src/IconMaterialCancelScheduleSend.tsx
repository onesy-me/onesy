import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelScheduleSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSend'

      short_name='CancelScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M3,17.97l6.1-2.61c0.02-0.14,0.04-0.29,0.07-0.43L3,15.75V17.97z" opacity=".3"/><path d="M16.5,11c-3.03,0-5.5,2.47-5.5,5.5s2.47,5.5,5.5,5.5s5.5-2.47,5.5-5.5S19.53,11,16.5,11z M18.97,18.27 l-0.71,0.71l-1.77-1.77l-1.77,1.77l-0.71-0.71l1.77-1.77l-1.77-1.77l0.71-0.71l1.77,1.77l1.77-1.77l0.71,0.71l-1.77,1.77 L18.97,18.27z" opacity=".3"/><polygon opacity=".3" points="3,8.25 10.52,9.25 3.01,6.03"/><path d="M16.5,9c-0.42,0-0.83,0.04-1.24,0.11c0,0,0,0,0,0L1.01,3L1,10l10.06,1.34c-0.42,0.44-0.78,0.93-1.09,1.46L1,14l0.01,7 l8.07-3.46c0,0,0,0,0,0C9.59,21.19,12.71,24,16.5,24c4.14,0,7.5-3.36,7.5-7.5S20.64,9,16.5,9z M3,8.25l0.01-2.22l7.51,3.22L3,8.25 z M9.1,15.36L3,17.97v-2.22l6.17-0.82C9.14,15.07,9.12,15.21,9.1,15.36z M16.5,22c-3.03,0-5.5-2.47-5.5-5.5s2.47-5.5,5.5-5.5 s5.5,2.47,5.5,5.5S19.53,22,16.5,22z"/><polygon points="18.27,14.03 16.5,15.79 14.73,14.03 14.03,14.73 15.79,16.5 14.03,18.27 14.73,18.97 16.5,17.21 18.27,18.97 18.97,18.27 17.21,16.5 18.97,14.73"/></g></g>
    </Icon>
  );
});

IconMaterialCancelScheduleSend.displayName = 'OnesyIconMaterialCancelScheduleSend';

export default IconMaterialCancelScheduleSend;
