import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextClipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClipFilled'

      short_name='FormatTextClip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm560 0q-17 0-28.5-11.5T720-200v-240H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h360v-240q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClipFilled.displayName = 'OnesyIconMaterialFormatTextClipFilled';

export default IconMaterialFormatTextClipFilled;
