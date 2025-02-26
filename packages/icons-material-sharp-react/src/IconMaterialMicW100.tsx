import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicW100'

      short_name='Mic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-452q-29 0-48.5-19.5T412-520v-240q0-29 19.5-48.5T480-828q29 0 48.5 19.5T548-760v240q0 29-19.5 48.5T480-452Zm0-188Zm-14 494v-146q-91-7-152.5-72T252-520h28q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h28q0 91-61.5 156T494-292v146h-28Zm14-334q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialMicW100.displayName = 'OnesyIconMaterialMicW100';

export default IconMaterialMicW100;
