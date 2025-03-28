import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward'

      short_name='Forward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M767-520 612-675q-12-12-12-28.5t12-28.5q12-11 28.5-11t27.5 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-308q-12 12-28 11.5T612-308q-12-12-12.5-28t11.5-28l156-156Zm-240 40H280q-50 0-85 35t-35 85v120q0 17-11.5 28.5T120-200q-17 0-28.5-11.5T80-240v-120q0-83 58.5-141.5T280-560h247L412-675q-12-12-12-28.5t12-28.5q12-11 28.5-11t27.5 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L468-308q-12 12-28 11.5T412-308q-12-12-12.5-28t11.5-28l116-116Z"/>
    </Icon>
  );
});

IconMaterialForward.displayName = 'OnesyIconMaterialForward';

export default IconMaterialForward;
