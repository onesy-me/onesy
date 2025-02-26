import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPhFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhFilled'

      short_name='WaterPh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-240h200v160H500v80h-60Zm240 0v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60ZM500-220h80v-40h-80v40ZM360-82Q238-96 159-187T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v8H360v318Z"/>
    </Icon>
  );
});

IconMaterialWaterPhFilled.displayName = 'OnesyIconMaterialWaterPhFilled';

export default IconMaterialWaterPhFilled;
