import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableConvertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableConvertW100'

      short_name='TableConvert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M456-172v-440H172v-176h616v616H456Zm28-28h276v-191H484v191Zm0-219h276v-193H484v193ZM200-640h560v-120H200v120Zm-28 508v-28h110q-48-17-79-59.24-31-42.25-31-95.76 0-67.77 47.91-115.39Q267.81-478 336-478v28q-57 0-96.5 39.5T200-313.88q0 48.44 30.49 85.69Q260.99-190.93 308-181v-115h28v164H172Z"/>
    </Icon>
  );
});

IconMaterialTableConvertW100.displayName = 'OnesyIconMaterialTableConvertW100';

export default IconMaterialTableConvertW100;
