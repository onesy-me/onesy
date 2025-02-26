import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyFlexStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexStartW100Filled'

      short_name='AlignJustifyFlexStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-696h28v696h-28Zm414-174v-348h68v348h-68Zm-240 0v-348h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexStartW100Filled.displayName = 'OnesyIconMaterialAlignJustifyFlexStartW100Filled';

export default IconMaterialAlignJustifyFlexStartW100Filled;
