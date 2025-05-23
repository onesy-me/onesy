import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnread'

      short_name='MarkEmailUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h484q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v440H80Zm80-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnread.displayName = 'OnesyIconMaterialMarkEmailUnread';

export default IconMaterialMarkEmailUnread;
