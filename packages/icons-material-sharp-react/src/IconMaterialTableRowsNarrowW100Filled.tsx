import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsNarrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowW100Filled'

      short_name='TableRowsNarrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-333h616v-133H172v133Zm0-161h616v-133H172v133Zm0-161h616v-133H172v133Zm616 483v-616 616Zm-616 0h616v-133H172v133Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowW100Filled.displayName = 'OnesyIconMaterialTableRowsNarrowW100Filled';

export default IconMaterialTableRowsNarrowW100Filled;
