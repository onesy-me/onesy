import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterW100Filled'

      short_name='AlignJustifyCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-696h28v696h-28Zm120-174v-348h68v348h-68Zm-280 0v-348h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterW100Filled.displayName = 'OnesyIconMaterialAlignJustifyCenterW100Filled';

export default IconMaterialAlignJustifyCenterW100Filled;
