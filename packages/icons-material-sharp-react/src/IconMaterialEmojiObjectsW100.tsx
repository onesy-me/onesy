import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiObjectsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsW100'

      short_name='EmojiObjects'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-190q-21 0-35.5-13T430-236h-58v-142q-63-33-96.5-91T242-590q0-100 69-169t169-69q100 0 169 69t69 169q0 63-33.5 121T588-378v142h-58q0 20-14.5 33T480-190Zm-80-74h160v-40H400v40Zm0-68h160v-40H400v40Zm-8-68h74v-130l-82-82 20-20 76 76 76-76 20 20-82 82v130h74q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-156Zm0-44Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsW100.displayName = 'OnesyIconMaterialEmojiObjectsW100';

export default IconMaterialEmojiObjectsW100;
