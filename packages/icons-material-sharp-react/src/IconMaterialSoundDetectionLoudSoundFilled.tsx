import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoundDetectionLoudSoundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionLoudSoundFilled'

      short_name='SoundDetectionLoudSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M313-86 86-312l169-169v-227l454 453H482L313-86Zm471-204-58-58q45-82 31.5-173.5T678-679q-66-66-157.5-79.5T347-727l-58-58q107-68 231.5-54.5T735-736q90 90 103.5 214.5T784-290ZM666-408l-68-68q0-25-7.5-48.5T566-565q-18-18-41.5-26t-49.5-8l-68-68q57-17 115-7t100 52q42 42 51.5 99.5T666-408Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionLoudSoundFilled.displayName = 'OnesyIconMaterialSoundDetectionLoudSoundFilled';

export default IconMaterialSoundDetectionLoudSoundFilled;
