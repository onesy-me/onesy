import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureW100'

      short_name='Exposure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560L200-200Zm396-56v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM256-636h168v-28H256v28Z"/>
    </Icon>
  );
});

IconMaterialExposureW100.displayName = 'OnesyIconMaterialExposureW100';

export default IconMaterialExposureW100;
