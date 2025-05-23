import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadW100'

      short_name='MarkEmailUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h456q-1 7-1.5 13.5T586-720H176l304 200 142-94q5 5 9.5 10.5T641-593L480-486 160-698v426q0 14 9 23t23 9h576q14 0 23-9t9-23v-279q8-2 14.5-4t13.5-5v348H132Zm28-508v480-480Zm600 94q-39 0-66.5-27.5T666-720q0-39 27.5-66.5T760-814q39 0 66.5 27.5T854-720q0 39-27.5 66.5T760-626Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100.displayName = 'OnesyIconMaterialMarkEmailUnreadW100';

export default IconMaterialMarkEmailUnreadW100;
