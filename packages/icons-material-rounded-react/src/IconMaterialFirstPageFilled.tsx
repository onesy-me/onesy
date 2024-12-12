import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFirstPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageFilled'

      short_name='FirstPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240q-17 0-28.5-11.5T240-280v-400q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680v400q0 17-11.5 28.5T280-240Zm272-240 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L468-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L552-480Z"/>
    </Icon>
  );
});

IconMaterialFirstPageFilled.displayName = 'OnesyIconMaterialFirstPageFilled';

export default IconMaterialFirstPageFilled;
