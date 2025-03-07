import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactEmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100Filled'

      short_name='ContactEmergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-192v-576h856v576H52Zm307.88-196q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM142-220h436q-42-48-98-78t-120-30q-64 0-120 30t-98 78Zm564-276h28v-80l69 40 14-24-69-40 69-40-14-24-69 40v-80h-28v80l-69-40-14 24 69 40-69 40 14 24 69-40v80Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100Filled.displayName = 'OnesyIconMaterialContactEmergencyW100Filled';

export default IconMaterialContactEmergencyW100Filled;
