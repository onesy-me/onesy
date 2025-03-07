import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicW100Filled'

      short_name='Mic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-452q-29 0-48.5-19.5T412-520v-240q0-29 19.5-48.5T480-828q29 0 48.5 19.5T548-760v240q0 29-19.5 48.5T480-452Zm-14 306v-146q-91-7-152.5-72T252-520h28q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h28q0 91-61.5 156T494-292v146h-28Z"/>
    </Icon>
  );
});

IconMaterialMicW100Filled.displayName = 'OnesyIconMaterialMicW100Filled';

export default IconMaterialMicW100Filled;
