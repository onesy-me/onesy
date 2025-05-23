import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMerge'

      short_name='CallMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-188q-11-11-11-28t11-28l172-172v-269l-75 75q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l143-144q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l145 145q12 12 12 28t-12 28q-12 12-28.5 12T596-610l-76-75v268q0 16-6 30.5T497-361L324-188q-11 11-28 11t-28-11Zm424 1q-11 11-28 11t-28-11l-72-71q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l71 71q11 11 11.5 27.5T692-187Z"/>
    </Icon>
  );
});

IconMaterialCallMerge.displayName = 'OnesyIconMaterialCallMerge';

export default IconMaterialCallMerge;
