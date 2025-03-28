import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRvHookupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupFilled'

      short_name='RvHookup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-38 0-68.5-22T248-200h-48q-50 0-85-35t-35-85v-160q0-33 23.5-56.5T160-560h160v-120H120q-17 0-28.5-11.5T80-720q0-17 11.5-28.5T120-760h480q33 0 56.5 23.5T680-680v400h86l-14-14q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T809-351l83 83q12 12 12 28t-12 28l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16H472q-12 36-43 58t-69 22Zm40-440h200v-120H400v120Zm-40 360q17 0 28.5-11.5T400-240q0-17-11.5-28.5T360-280q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200Z"/>
    </Icon>
  );
});

IconMaterialRvHookupFilled.displayName = 'OnesyIconMaterialRvHookupFilled';

export default IconMaterialRvHookupFilled;
