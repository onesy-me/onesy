import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm68-248 160-160 160 160 160-160 40 40v-220H200v300l40 40Zm-40 220h560v-300l-40-40-160 160-160-160-160 160-40-40v220Zm0 0v-300 28-288 560Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100.displayName = 'OnesyIconMaterialBrokenImageW100';

export default IconMaterialBrokenImageW100;
