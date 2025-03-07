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
      <path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm110-118v-108l67-67q9-9 9-21t-9-21q-9-9-21-9t-21 9l-55 55-55-55q-9-9-21-9t-21 9q-9 9-9 21t9 21l67 67v108h60Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsFilled.displayName = 'OnesyIconMaterialEmojiObjectsFilled';

export default IconMaterialEmojiObjectsFilled;
