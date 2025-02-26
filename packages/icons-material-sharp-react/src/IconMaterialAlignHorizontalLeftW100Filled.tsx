import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftW100Filled'

      short_name='AlignHorizontalLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-696h28v696h-28Zm138-184v-70h238v70H310Zm0-258v-70h478v70H310Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftW100Filled.displayName = 'OnesyIconMaterialAlignHorizontalLeftW100Filled';

export default IconMaterialAlignHorizontalLeftW100Filled;
