import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArNewFilled'

      short_name='ViewInArNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 20.175-7-4.05v-8.1l7-4.05 7 4.05v8.1ZM1 6V1h5v2H3v3Zm5 17H1v-5h2v3h3Zm12 0v-2h3v-3h2v5Zm3-17V3h-3V1h5v5Zm-9 11.825 1-.575v-4.6l4-2.3V9.175L16 8.6l-4 2.3-4-2.3-1 .575v1.175l4 2.3v4.6Z"/>
    </Icon>
  );
});

IconMaterialViewInArNewFilled.displayName = 'OnesyIconMaterialViewInArNewFilled';

export default IconMaterialViewInArNewFilled;
