import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenW100'

      short_name='WindowOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-616h536v616H212Zm28-322h212v-28h56v28h212v-266H240v266Zm0 294h480-480Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenW100.displayName = 'OnesyIconMaterialWindowOpenW100';

export default IconMaterialWindowOpenW100;
