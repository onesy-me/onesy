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
      <path d="M480-190q-21 0-35.5-13T430-236h-30q-11 0-19.5-8.5T372-264v-114q-63-33-96.5-91T242-590q0-100 69-169t169-69q100 0 169 69t69 169q0 63-33.5 121T588-378v114q0 11-8.5 19.5T560-236h-30q0 20-14.5 33T480-190Zm-80-74h160v-40H400v40Zm0-68h160v-40H400v40Zm94-68v-130l72-72q4-4 4.5-9.5T566-622q-5-5-10-5t-10 5l-66 66-66-66q-4-4-9.5-4.5T394-622q-5 5-5 10t5 10l72 72v130h28Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsW100Filled.displayName = 'OnesyIconMaterialEmojiObjectsW100Filled';

export default IconMaterialEmojiObjectsW100Filled;
