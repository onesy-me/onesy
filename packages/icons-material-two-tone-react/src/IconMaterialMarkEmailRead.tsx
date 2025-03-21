import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailRead'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M20,8v4.08C19.67,12.03,19.34,12,19,12c-3.53,0-6.43,2.61-6.92,6H4V8l8,5L20,8z M20,6H4l8,5L20,6z" opacity=".3"/><path d="M12.08,18H4V8l8,5l8-5v4.08c0.71,0.1,1.38,0.31,2,0.6V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2 h8.08C12.03,19.67,12,19.34,12,19S12.03,18.33,12.08,18z M20,6l-8,5L4,6H20z M17.34,22l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24 L23,16.34L17.34,22z"/></g>
    </Icon>
  );
});

IconMaterialMarkEmailRead.displayName = 'OnesyIconMaterialMarkEmailRead';

export default IconMaterialMarkEmailRead;
