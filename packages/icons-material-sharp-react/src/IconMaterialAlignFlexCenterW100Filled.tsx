import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignFlexCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexCenterW100Filled'

      short_name='AlignFlexCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-132v-314H146v-68h330v-314h28v314h310v68H504v314h-28Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenterW100Filled.displayName = 'OnesyIconMaterialAlignFlexCenterW100Filled';

export default IconMaterialAlignFlexCenterW100Filled;
