import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookOnline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnline'

      short_name='BookOnline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320v-120q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520v-120h320v120q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440v120H320Zm160-60q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialBookOnline.displayName = 'OnesyIconMaterialBookOnline';

export default IconMaterialBookOnline;
