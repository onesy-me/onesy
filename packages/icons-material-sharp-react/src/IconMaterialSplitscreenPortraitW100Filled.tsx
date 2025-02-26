import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenPortraitW100Filled'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-260h280v-170H340v170Zm0-270h280v-170H340v170ZM212-132v-696h536v696H212Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenPortraitW100Filled.displayName = 'OnesyIconMaterialSplitscreenPortraitW100Filled';

export default IconMaterialSplitscreenPortraitW100Filled;
