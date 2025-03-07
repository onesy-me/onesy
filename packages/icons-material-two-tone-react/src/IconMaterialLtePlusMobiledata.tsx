import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLtePlusMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledata'

      short_name='LtePlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z"/></g></g>
    </Icon>
  );
});

IconMaterialLtePlusMobiledata.displayName = 'OnesyIconMaterialLtePlusMobiledata';

export default IconMaterialLtePlusMobiledata;
