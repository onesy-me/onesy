import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompact = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompact'

      short_name='ViewCompact'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,13.25h2.5v-2.5H4V13.25z M4,18h2.5v-2.5H4V18z M8.5,8.5H11V6H8.5V8.5z M17.5,18H20v-2.5h-2.5V18z M17.5,13.25H20v-2.5h-2.5V13.25z M17.5,6v2.5H20V6H17.5z M13,8.5h2.5V6H13V8.5z M8.5,13.25H11v-2.5H8.5V13.25z M8.5,18H11v-2.5 H8.5V18z M4,8.5h2.5V6H4V8.5z M13,13.25h2.5v-2.5H13V13.25z M13,18h2.5v-2.5H13V18z" opacity=".3"/><path d="M2,4v16h20V4H2z M6.5,18H4v-2.5h2.5V18z M6.5,13.25H4v-2.5h2.5V13.25z M6.5,8.5H4V6h2.5V8.5z M11,18H8.5v-2.5H11V18z M11,13.25H8.5v-2.5H11V13.25z M11,8.5H8.5V6H11V8.5z M15.5,18H13v-2.5h2.5V18z M15.5,13.25H13v-2.5h2.5V13.25z M15.5,8.5H13V6 h2.5V8.5z M20,18h-2.5v-2.5H20V18z M20,13.25h-2.5v-2.5H20V13.25z M20,8.5h-2.5V6H20V8.5z"/></g></g>
    </Icon>
  );
});

IconMaterialViewCompact.displayName = 'OnesyIconMaterialViewCompact';

export default IconMaterialViewCompact;
