import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyCenterW100'

      short_name='AlignJustifyCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-696h28v696h-28Zm120-174v-348h68v348h-68Zm-280 0v-348h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyCenterW100.displayName = 'OnesyIconMaterialAlignJustifyCenterW100';

export default IconMaterialAlignJustifyCenterW100;
