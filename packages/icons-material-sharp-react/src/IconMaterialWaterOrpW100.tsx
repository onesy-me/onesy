import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterOrpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrpW100'

      short_name='WaterOrp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-812q130 117 196.5 214T668-420h-28q-5-72-65-161T400-774Q281-665 220.5-573T160-408q0 38 9.5 72t26.5 63v47q-30-36-47-81.95T132-408q0-82 66.5-182.5T400-812Zm0 289ZM276-132v-208h148v208H276Zm28-28h92v-152h-92v152Zm192 28v-208h168v128h-43l35 80h-31l-34-80h-67v80h-28Zm240 0v-208h168v128H764v80h-28ZM524-240h112v-72H524v72Zm240 0h112v-72H764v72Z"/>
    </Icon>
  );
});

IconMaterialWaterOrpW100.displayName = 'OnesyIconMaterialWaterOrpW100';

export default IconMaterialWaterOrpW100;
