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
      <path d="M600-120q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Zm-400 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm0-640v560h160v-560H200Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightFilled.displayName = 'OnesyIconMaterialSplitscreenRightFilled';

export default IconMaterialSplitscreenRightFilled;
