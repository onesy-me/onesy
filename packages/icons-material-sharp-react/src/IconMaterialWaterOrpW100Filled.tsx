import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterOrpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrpW100Filled'

      short_name='WaterOrp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276-132v-208h148v208H276Zm28-28h92v-152h-92v152Zm192 28v-208h168v128h-43l35 80h-31l-34-80h-67v80h-28Zm240 0v-208h168v128H764v80h-28ZM524-240h112v-72H524v72Zm240 0h112v-72H764v72Zm-568 14q-30-36-47-81.95T132-408q0-82 66.5-182.5T400-812q130 117 196.5 214T668-420H196v194Z"/>
    </Icon>
  );
});

IconMaterialWaterOrpW100Filled.displayName = 'OnesyIconMaterialWaterOrpW100Filled';

export default IconMaterialWaterOrpW100Filled;
