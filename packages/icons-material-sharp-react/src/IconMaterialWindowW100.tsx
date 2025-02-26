import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowW100'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-172H172v-616h616v616ZM494-466v266h266v-266H494Zm0-28h266v-266H494v266Zm-28 0v-266H200v266h266Zm0 28H200v266h266v-266Z"/>
    </Icon>
  );
});

IconMaterialWindowW100.displayName = 'OnesyIconMaterialWindowW100';

export default IconMaterialWindowW100;
