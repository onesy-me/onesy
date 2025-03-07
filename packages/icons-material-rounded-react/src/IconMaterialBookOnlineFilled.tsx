import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookOnlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnlineFilled'

      short_name='BookOnline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320q-17 0-28.5-11.5T320-360v-67q0-5 4-9.5t9-5.5q12-4 19.5-14.5T360-480q0-13-7.5-23.5T333-518q-5-1-9-5.5t-4-9.5v-67q0-17 11.5-28.5T360-640h240q17 0 28.5 11.5T640-600v67q0 5-4 9.5t-9 5.5q-12 4-19.5 14.5T600-480q0 13 7.5 23.5T627-442q5 1 9 5.5t4 9.5v67q0 17-11.5 28.5T600-320H360Zm120-60q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialBookOnlineFilled.displayName = 'OnesyIconMaterialBookOnlineFilled';

export default IconMaterialBookOnlineFilled;
