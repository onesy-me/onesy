import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputSvideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputSvideoFilled'

      short_name='SettingsInputSvideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80ZM300-440q25 0 42.5-17.5T360-500q0-25-17.5-42.5T300-560q-25 0-42.5 17.5T240-500q0 25 17.5 42.5T300-440Zm360 0q25 0 42.5-17.5T720-500q0-25-17.5-42.5T660-560q-25 0-42.5 17.5T600-500q0 25 17.5 42.5T660-440ZM360-260q25 0 42.5-17.5T420-320q0-25-17.5-42.5T360-380q-25 0-42.5 17.5T300-320q0 25 17.5 42.5T360-260Zm240 0q25 0 42.5-17.5T660-320q0-25-17.5-42.5T600-380q-25 0-42.5 17.5T540-320q0 25 17.5 42.5T600-260ZM420-600h120q26 0 43-17t17-43q0-26-17-43t-43-17H420q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputSvideoFilled.displayName = 'OnesyIconMaterialSettingsInputSvideoFilled';

export default IconMaterialSettingsInputSvideoFilled;
