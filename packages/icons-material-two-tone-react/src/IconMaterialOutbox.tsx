import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Outbox'

      short_name='Outbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,18c-1.63,0-3.06-0.79-3.98-2H5v3h14v-3h-3.02C15.06,17.21,13.63,18,12,18z" enableBackground="new" opacity=".3"/><polygon points="11,14 13,14 13,11 16,11 12,7 8,11 11,11"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5v-3h3.02 c0.91,1.21,2.35,2,3.98,2s3.06-0.79,3.98-2H19V19z M19,14h-4.18c-0.41,1.16-1.51,2-2.82,2s-2.4-0.84-2.82-2H5V5h14V14z"/></g></g>
    </Icon>
  );
});

IconMaterialOutbox.displayName = 'OnesyIconMaterialOutbox';

export default IconMaterialOutbox;
