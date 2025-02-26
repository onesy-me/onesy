import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSelfStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSelfStretchW100'

      short_name='AlignSelfStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-800v-28h696v28H132Zm0 668v-28h696v28H132Zm314-180v-356h68v356h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignSelfStretchW100.displayName = 'OnesyIconMaterialAlignSelfStretchW100';

export default IconMaterialAlignSelfStretchW100;
