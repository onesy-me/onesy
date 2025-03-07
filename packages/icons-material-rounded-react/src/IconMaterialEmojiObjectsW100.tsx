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
      <path d="M480-190q-21 0-35.5-13T430-236h-30q-11 0-19.5-8.5T372-264v-114q-63-33-96.5-91T242-590q0-100 69-169t169-69q100 0 169 69t69 169q0 63-33.5 121T588-378v114q0 11-8.5 19.5T560-236h-30q0 20-14.5 33T480-190Zm-80-74h160v-40H400v40Zm0-68h160v-40H400v40Zm-8-68h74v-130l-72-72q-4-4-4.5-9.5T394-622q5-5 10-5t10 5l66 66 66-66q4-4 9.5-4.5T566-622q5 5 5 10t-5 10l-72 72v130h74q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-156Zm0-44Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsW100.displayName = 'OnesyIconMaterialEmojiObjectsW100';

export default IconMaterialEmojiObjectsW100;
