import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRightFilled'

      short_name='SplitscreenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v-720h320v720H520Zm-400 0v-720h320v720H120Zm80-640v560h160v-560H200Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightFilled.displayName = 'OnesyIconMaterialSplitscreenRightFilled';

export default IconMaterialSplitscreenRightFilled;
