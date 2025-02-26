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
      <path d="M228-625q51-27 105.5-41T445-680q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h37l17-160H210l18 175Zm51 545q-31 0-53.5-20T200-151l-69-630q-5-40 22-69.5t67-29.5h520q40 0 67 29.5t22 69.5l-69 630q-3 31-25.5 51T681-80H279Z"/>
    </Icon>
  );
});

IconMaterialWaterFullFilled.displayName = 'OnesyIconMaterialWaterFullFilled';

export default IconMaterialWaterFullFilled;
