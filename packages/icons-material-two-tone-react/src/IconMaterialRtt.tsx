import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRtt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rtt'

      short_name='Rtt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M9.03,3l-1.11,7.07h2.62l0.7-4.5h2.58L11.8,18.43H9.47L9.06,21h7.27l0.4-2.57h-2.35l2-12.86h2.58l-0.71,4.5h2.65L22,3H9.03 z M8,5H4L3.69,7h4L8,5z M7.39,9h-4l-0.31,2h4L7.39,9z M8.31,17h-6L2,19h6L8.31,17z M8.93,13h-6l-0.31,2h6.01L8.93,13z"/></g>
    </Icon>
  );
});

IconMaterialRtt.displayName = 'OnesyIconMaterialRtt';

export default IconMaterialRtt;
