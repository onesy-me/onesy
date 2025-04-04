import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiObjectsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsW100Filled'

      short_name='EmojiObjects'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-190q-21 0-35.5-13T430-236h-58v-142q-63-33-96.5-91T242-590q0-100 69-169t169-69q100 0 169 69t69 169q0 63-33.5 121T588-378v142h-58q0 20-14.5 33T480-190Zm-80-74h160v-40H400v40Zm0-68h160v-40H400v40Zm94-68v-130l82-82-20-20-76 76-76-76-20 20 82 82v130h28Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsW100Filled.displayName = 'OnesyIconMaterialEmojiObjectsW100Filled';

export default IconMaterialEmojiObjectsW100Filled;
