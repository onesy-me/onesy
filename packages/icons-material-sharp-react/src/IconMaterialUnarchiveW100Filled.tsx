import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnarchiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveW100Filled'

      short_name='Unarchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-530 356-406l20 20 90-90v194h28v-194l90 90 20-20-124-124ZM172-172v-498l98-118h419l99 120v496H172Zm43-506h529l-68-82H283l-68 82Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveW100Filled.displayName = 'OnesyIconMaterialUnarchiveW100Filled';

export default IconMaterialUnarchiveW100Filled;
