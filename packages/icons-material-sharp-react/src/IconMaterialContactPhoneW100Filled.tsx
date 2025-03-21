import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneW100Filled'

      short_name='ContactPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-192v-576h856v576H52Zm307.88-196q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM142-220h436q-42-48-98-78t-120-30q-64 0-120 30t-98 78Zm582-50 60-60-46-62h-70q-8-24-11-44.5t-3-43.5q0-23 3-42.5t11-45.5h70l46-62-60-60q-47 39-72.5 93.5T626-480q0 62 25.5 116.5T724-270Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneW100Filled.displayName = 'OnesyIconMaterialContactPhoneW100Filled';

export default IconMaterialContactPhoneW100Filled;
