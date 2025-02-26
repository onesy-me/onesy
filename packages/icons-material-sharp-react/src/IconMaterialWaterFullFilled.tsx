import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFullFilled'

      short_name='WaterFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M228-625q51-27 105.5-41T445-680q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h37l17-160H210l18 175ZM208-80l-88-800h720L752-80H208Z"/>
    </Icon>
  );
});

IconMaterialWaterFullFilled.displayName = 'OnesyIconMaterialWaterFullFilled';

export default IconMaterialWaterFullFilled;
