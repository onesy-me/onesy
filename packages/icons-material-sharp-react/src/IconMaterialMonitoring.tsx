import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitoring = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Monitoring'

      short_name='Monitoring'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
    </Icon>
  );
});

IconMaterialMonitoring.displayName = 'OnesyIconMaterialMonitoring';

export default IconMaterialMonitoring;
