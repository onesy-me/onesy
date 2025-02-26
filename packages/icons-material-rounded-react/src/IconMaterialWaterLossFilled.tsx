import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLossFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLossFilled'

      short_name='WaterLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M258-360q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H210l48 440Zm21 280q-31 0-53.5-20T200-151l-69-630q-5-40 22-69.5t67-29.5h520q40 0 67 29.5t22 69.5l-69 630q-3 31-25.5 51T681-80H279Z"/>
    </Icon>
  );
});

IconMaterialWaterLossFilled.displayName = 'OnesyIconMaterialWaterLossFilled';

export default IconMaterialWaterLossFilled;
