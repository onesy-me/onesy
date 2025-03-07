import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenPortraitW100'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-260h280v-170H340v170Zm0-270h280v-170H340v170ZM212-132v-696h536v696H212Zm28-28h480v-640H240v640Zm480-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenPortraitW100.displayName = 'OnesyIconMaterialSplitscreenPortraitW100';

export default IconMaterialSplitscreenPortraitW100;
