import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoundationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationFilled'

      short_name='Foundation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-160h-80v-80h80v-166L88-440l-48-64 440-336 440 336-48 64-112-86v166h80v80h-80v160h-80v-160H520v160h-80v-160H280v160h-80Zm80-240h160v-349L280-587v227Zm240 0h160v-227L520-709v349Z"/>
    </Icon>
  );
});

IconMaterialFoundationFilled.displayName = 'OnesyIconMaterialFoundationFilled';

export default IconMaterialFoundationFilled;
