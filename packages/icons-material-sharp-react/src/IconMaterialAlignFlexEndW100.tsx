import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexEndW100'

      short_name='AlignFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-28h696v28H132Zm314-160v-508h68v508h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexEndW100.displayName = 'OnesyIconMaterialAlignFlexEndW100';

export default IconMaterialAlignFlexEndW100;
