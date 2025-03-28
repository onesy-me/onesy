import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Task'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M13,9V4H6v16h12V9H13z M10.94,18L7.4,14.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z" opacity=".3"/><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z"/></g>
    </Icon>
  );
});

IconMaterialTask.displayName = 'OnesyIconMaterialTask';

export default IconMaterialTask;
