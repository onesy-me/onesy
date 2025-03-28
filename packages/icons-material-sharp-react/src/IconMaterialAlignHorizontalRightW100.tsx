import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightW100'

      short_name='AlignHorizontalRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-132v-696h28v696h-28ZM412-316v-70h238v70H412ZM172-574v-70h478v70H172Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightW100.displayName = 'OnesyIconMaterialAlignHorizontalRightW100';

export default IconMaterialAlignHorizontalRightW100;
