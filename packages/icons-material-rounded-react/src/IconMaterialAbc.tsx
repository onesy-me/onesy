import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAbc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Abc'

      short_name='Abc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360q-8 0-14-6t-6-14v-200q0-8 6-14t14-6h140q17 0 28.5 11.5T580-560v40q0 17-11.5 28.5T540-480q17 0 28.5 11.5T580-440v40q0 17-11.5 28.5T540-360H400Zm40-150h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-290 60q-13 0-21.5-8.5T120-390v-170q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v170q0 13-8.5 21.5T290-360q-13 0-21.5-8.5T260-390v-30h-80v30q0 13-8.5 21.5T150-360Zm30-120h80v-60h-80v60Zm500 120q-17 0-28.5-11.5T640-400v-160q0-17 11.5-28.5T680-600h120q17 0 28.5 11.5T840-560v20q0 13-8.5 21.5T810-510q-13 0-21.5-8.5T780-540h-80v120h80q0-13 8.5-21.5T810-450q13 0 21.5 8.5T840-420v20q0 17-11.5 28.5T800-360H680Z"/>
    </Icon>
  );
});

IconMaterialAbc.displayName = 'OnesyIconMaterialAbc';

export default IconMaterialAbc;
