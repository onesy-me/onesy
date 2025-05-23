import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFlags = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlags'

      short_name='EmojiFlags'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g/><g><polygon opacity=".3" points="12,9 7,9 7,15 13,15 14,17 18,17 18,11 13,11"/><path d="M14,9l-1-2H7V5.72C7.6,5.38,8,4.74,8,4c0-1.1-0.9-2-2-2S4,2.9,4,4c0,0.74,0.4,1.38,1,1.72V21h2v-4h5l1,2h7V9H14z M18,17 h-4l-1-2H7V9h5l1,2h5V17z"/></g></g>
    </Icon>
  );
});

IconMaterialEmojiFlags.displayName = 'OnesyIconMaterialEmojiFlags';

export default IconMaterialEmojiFlags;
