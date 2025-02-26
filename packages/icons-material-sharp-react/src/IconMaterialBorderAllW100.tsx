import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm588-28v-266H494v266h266Zm0-560H494v266h266v-266Zm-560 0v266h266v-266H200Zm0 560h266v-266H200v266Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100.displayName = 'OnesyIconMaterialBorderAllW100';

export default IconMaterialBorderAllW100;
