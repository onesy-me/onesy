import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLoss = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLoss'

      short_name='WaterLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160h400l13-120q-36 0-67-6t-84-21q-23-7-48-10t-50-3q-47 0-91.5 11.5T267-275l13 115Zm-22-200q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H210l48 440ZM208-80l-88-800h720L752-80H208Zm72-80h-13 426-413Z"/>
    </Icon>
  );
});

IconMaterialWaterLoss.displayName = 'OnesyIconMaterialWaterLoss';

export default IconMaterialWaterLoss;
