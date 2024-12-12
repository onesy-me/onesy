import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandLess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLess'

      short_name='ExpandLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-529 324-373q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-529Z"/>
    </Icon>
  );
});

IconMaterialExpandLess.displayName = 'OnesyIconMaterialExpandLess';

export default IconMaterialExpandLess;
