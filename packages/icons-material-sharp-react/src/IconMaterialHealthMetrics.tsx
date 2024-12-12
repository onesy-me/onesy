import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthMetrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetrics'

      short_name='HealthMetrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200H280ZM160-520h221l47 70 54-172h71l68 102h179v-80H600v-200H360v200H160v80Zm200 360h240v-200h200v-80H578l-46-70-54 173h-72l-68-103H160v80h200v200Zm120-320Z"/>
    </Icon>
  );
});

IconMaterialHealthMetrics.displayName = 'OnesyIconMaterialHealthMetrics';

export default IconMaterialHealthMetrics;
