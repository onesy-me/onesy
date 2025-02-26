import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHevcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HevcW100Filled'

      short_name='Hevc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M136-376v-208h28v80h72v-80h28v208h-28v-100h-72v100h-28Zm198 0v-208h108v28h-80v52h80v28h-80v72h80v28H334Zm214 0-50-208h29l43 178 43-178h29l-50 208h-44Zm148 0v-208h128v48h-28v-20h-72v152h72v-20h28v48H696Z"/>
    </Icon>
  );
});

IconMaterialHevcW100Filled.displayName = 'OnesyIconMaterialHevcW100Filled';

export default IconMaterialHevcW100Filled;
