import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyFlexEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEndW100Filled'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-132v-696h28v696h-28ZM586-306v-348h68v348h-68Zm-240 0v-348h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEndW100Filled.displayName = 'OnesyIconMaterialAlignJustifyFlexEndW100Filled';

export default IconMaterialAlignJustifyFlexEndW100Filled;
