import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSheetsRtlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlW100Filled'

      short_name='SheetsRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-108 141-219q-9-9-9-21t9-21l111-111q12-12 28-12t28 12.5q12 11.5 11.67 28Q319.33-327 308-315l-35 35h487q17.05 0 28.53 11.46Q800-257.07 800-240.04q0 17.04-11.47 28.54Q777.05-200 760-200H273l35 35q11 12 11.5 28.5T308-108q-11.64 12-27.82 12T252-108Zm-47-332q-19 0-32-13t-13-32v-390q0-19 13-32t32-13h550q19 0 32 13t13 32v390q0 19-13 32t-32 13H205Zm35-280h200v-120H264q-10 0-17 7t-7 17v96Zm280 0h200v-96q0-10-7-17t-17-7H520v120Zm-80 200v-120H240v96q0 10 7 17t17 7h176Zm80 0h176q10 0 17-7t7-17v-96H520v120Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlW100Filled.displayName = 'OnesyIconMaterialSheetsRtlW100Filled';

export default IconMaterialSheetsRtlW100Filled;
