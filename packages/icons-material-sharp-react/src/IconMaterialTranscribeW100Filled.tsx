import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTranscribeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranscribeW100Filled'

      short_name='Transcribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M723-372q-44-44-70-103t-26-125q0-66 26-125t70-103l20 20q-41 41-64.5 94.5T655-600q0 60 23.5 113.5T743-392l-20 20Zm134-134q-18-18-29-42.5T817-600q0-29 11-52.5t29-41.5l20 20q-15 15-23.5 33t-8.5 41q0 21 8.5 40t23.5 34l-20 20Zm-512 14q-45 0-76.5-31.5T237-600q0-45 31.5-76.5T345-708q45 0 76.5 31.5T453-600q0 45-31.5 76.5T345-492ZM77-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T345-388q54 0 112 14.5T563-336q24 11 37 28.5t13 43.5v52H77Z"/>
    </Icon>
  );
});

IconMaterialTranscribeW100Filled.displayName = 'OnesyIconMaterialTranscribeW100Filled';

export default IconMaterialTranscribeW100Filled;
