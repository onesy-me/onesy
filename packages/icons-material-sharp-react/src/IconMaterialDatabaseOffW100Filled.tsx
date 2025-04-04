import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatabaseOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseOffW100Filled'

      short_name='DatabaseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-51 0-98-7.5T295-201q-40-14-71.5-34T172-280v-123q20 25 51.5 45t71.5 34q40 14 87 21.5t98 7.5q44 0 85-5.5t78-16.5l87 87q-48 28-112.5 43T480-172Zm309-112-66-66q20-11 37-24.5t29-28.5v119Zm-309-61q-51 0-98-7.5T295-374q-40-14-71.5-34T172-453v-124q20 25 51.5 45t71.5 34q40 14 87 21.5t98 7.5h11l112 112q-29 6-60 9t-63 3Zm209-39-95-95q65-12 116-37.5t79-60.5v124q-17 21-42.5 38T689-384ZM440-520q-114-7-191-44.5T172-653q0-22 15-41.5t42-36.5l211 211Zm111-2L309-764q37-11 80.5-17t91.5-6q129 0 218.5 39t89.5 95q0 48-67.5 84T551-522Zm219 372L150-770l20-20 620 620-20 20Z"/>
    </Icon>
  );
});

IconMaterialDatabaseOffW100Filled.displayName = 'OnesyIconMaterialDatabaseOffW100Filled';

export default IconMaterialDatabaseOffW100Filled;
