import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100Filled'

      short_name='Label'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-480 627-252H172v-456h453l163 228Z"/>
    </Icon>
  );
});

IconMaterialLabelW100Filled.displayName = 'OnesyIconMaterialLabelW100Filled';

export default IconMaterialLabelW100Filled;
