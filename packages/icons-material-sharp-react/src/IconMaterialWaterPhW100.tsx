import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPhW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhW100'

      short_name='WaterPh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-133q-108-7-179-84.5T132-408q0-82 66.5-182.5T400-812q130 117 196.5 214T668-420h-28q-5-72-65-161T400-774Q281-665 220.5-573T160-408q0 103 62.5 171.5T382-161v28Zm18-334Zm62 335v-208h168v132H490v76h-28Zm244 0v-208h28v80h112v-80h28v208h-28v-100H734v100h-28ZM490-236h112v-74H490v74Z"/>
    </Icon>
  );
});

IconMaterialWaterPhW100.displayName = 'OnesyIconMaterialWaterPhW100';

export default IconMaterialWaterPhW100;
