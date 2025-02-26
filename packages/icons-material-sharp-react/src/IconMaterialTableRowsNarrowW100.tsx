import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsNarrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowW100'

      short_name='TableRowsNarrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-347h560v-119H200v119Zm0-147h560v-119H200v119Zm0-147h560v-119H200v119Zm-28 469v-616h616v616H172Zm28-28h560v-119H200v119Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowW100.displayName = 'OnesyIconMaterialTableRowsNarrowW100';

export default IconMaterialTableRowsNarrowW100;
