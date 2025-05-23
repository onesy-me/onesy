import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceSelection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelection'

      short_name='VoiceSelection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m652-194-57-56q21-21 33-48.5t12-59.5q0-32-12-59.5T595-466l57-57q32 32 50 74.5t18 90.5q0 48-18 90t-50 74ZM765-80l-57-57q43-43 67.5-99.5T800-358q0-66-24.5-122T708-579l57-57q54 54 84.5 125T880-358q0 81-30.5 152.5T765-80ZM80-80v-80h179v-28q-46-23-72.5-66.5T160-349v-91h160v-120h106L324-822l75-31 128 333v40H400v120H240v11q0 35 21.5 61.5T316-252l26 3v169H80Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelection.displayName = 'OnesyIconMaterialVoiceSelection';

export default IconMaterialVoiceSelection;
