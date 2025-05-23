import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiEvents = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiEvents'

      short_name='EmojiEvents'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h120q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120H320q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200h120ZM280-528v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/>
    </Icon>
  );
});

IconMaterialEmojiEvents.displayName = 'OnesyIconMaterialEmojiEvents';

export default IconMaterialEmojiEvents;
