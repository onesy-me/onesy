import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreVertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVertW100'

      short_name='MoreVert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-236q-11.55 0-19.77-8.23Q452-252.45 452-264q0-11.55 8.23-19.77Q468.45-292 480-292q11.55 0 19.77 8.23Q508-275.55 508-264q0 11.55-8.23 19.77Q491.55-236 480-236Zm0-216q-11.55 0-19.77-8.23Q452-468.45 452-480q0-11.55 8.23-19.77Q468.45-508 480-508q11.55 0 19.77 8.23Q508-491.55 508-480q0 11.55-8.23 19.77Q491.55-452 480-452Zm0-216q-11.55 0-19.77-8.22Q452-684.45 452-696t8.23-19.78Q468.45-724 480-724q11.55 0 19.77 8.22Q508-707.55 508-696t-8.23 19.78Q491.55-668 480-668Z"/>
    </Icon>
  );
});

IconMaterialMoreVertW100.displayName = 'OnesyIconMaterialMoreVertW100';

export default IconMaterialMoreVertW100;
