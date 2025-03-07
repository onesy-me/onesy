import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatAddOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOn'

      short_name='ChatAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-280-86 86q-10 10-22 5t-12-19v-552q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v161q0 17-11.5 28T720-560q-17 0-28.5-11.5T680-600v-160H200v400h240q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280H240Zm80-320h240q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160h120q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm360 160h-80q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h80v-80q0-17 11.5-28.5T720-480q17 0 28.5 11.5T760-440v80h80q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280h-80v80q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-80Zm-480-80v-400 400Z"/>
    </Icon>
  );
});

IconMaterialChatAddOn.displayName = 'OnesyIconMaterialChatAddOn';

export default IconMaterialChatAddOn;
