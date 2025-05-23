import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkUnreadChatAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAlt'

      short_name='MarkUnreadChatAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,17.17L5.17,16H20V7.9C19.68,7.96,19.34,8,19,8s-0.68-0.04-1-0.1V8H6V6h9.03 c-0.44-0.58-0.77-1.26-0.92-2H4V17.17z M6,9h12v2H6V9z M6,12h8v2H6V12z" enableBackground="new" opacity=".3"/><g><circle cx="19" cy="3" r="3"/><path d="M20,16H5.17L4,17.17V4h10.1c-0.18-0.89-0.08-1.61,0-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h14c1.1,0,2-0.9,2-2V6.97 c-0.58,0.44-1.26,0.77-2,0.92V16z"/><rect height="2" width="8" x="6" y="12"/><rect height="2" width="12" x="6" y="9"/><path d="M6,8h12V7.9c-1.21-0.25-2.25-0.95-2.97-1.9H6V8z"/></g></g></g>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAlt.displayName = 'OnesyIconMaterialMarkUnreadChatAlt';

export default IconMaterialMarkUnreadChatAlt;
