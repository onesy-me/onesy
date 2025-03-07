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
      <path d="M360-320q-17 0-28.5-11.5T320-360v-67q0-5 3.5-9t9.5-6q12-4 19.5-14t7.5-24q0-14-7.5-24T333-518q-5-2-9-6t-4-9v-67q0-17 11.5-28.5T360-640h240q17 0 28.5 11.5T640-600v67q0 5-3.5 9t-9.5 6q-12 4-19.5 14t-7.5 24q0 14 7.5 24t19.5 14q5 2 9 6t4 9v67q0 17-11.5 28.5T600-320H360Zm120-60q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialBookOnline.displayName = 'OnesyIconMaterialBookOnline';

export default IconMaterialBookOnline;
