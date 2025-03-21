import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiObjectsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsFilled'

      short_name='EmojiObjects'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-26 0-47-12.5T400-126h-80v-222q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v222h-80q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm110-118v-108l88-88-42-42-76 76-76-76-42 42 88 88v108h60Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsFilled.displayName = 'OnesyIconMaterialEmojiObjectsFilled';

export default IconMaterialEmojiObjectsFilled;
