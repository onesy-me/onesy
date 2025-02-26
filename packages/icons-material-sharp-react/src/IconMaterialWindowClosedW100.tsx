import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedW100'

      short_name='WindowClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-616h536v616H212Zm28-322h212v-28h56v28h212v-266H240v266Zm0 294h480v-266H240v266Zm0 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedW100.displayName = 'OnesyIconMaterialWindowClosedW100';

export default IconMaterialWindowClosedW100;
