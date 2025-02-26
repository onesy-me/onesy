import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnarchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveW100'

      short_name='Unarchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-530 356-406l20 20 90-90v194h28v-194l90 90 20-20-124-124ZM200-650v450h560v-450H200Zm-28 478v-498l98-118h419l99 120v496H172Zm43-506h529l-68-82H283l-68 82Zm265 253Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveW100.displayName = 'OnesyIconMaterialUnarchiveW100';

export default IconMaterialUnarchiveW100;
