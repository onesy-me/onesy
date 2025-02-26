import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeskphoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskphoneFilled'

      short_name='Deskphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-200h80v-560h-80v560ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0 120q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-240h240q17 0 28.5-11.5T560-560v-80q0-17-11.5-28.5T520-680H280q-17 0-28.5 11.5T240-640v80q0 17 11.5 28.5T280-520Zm120 120q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm0 120q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Zm120-120q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400Zm0 120q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360q-17 0-28.5 11.5T480-320q0 17 11.5 28.5T520-280Zm160 160q-23 0-40.5-11T611-160H200q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h411q11-18 28.5-29t40.5-11h80q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120h-80Z"/>
    </Icon>
  );
});

IconMaterialDeskphoneFilled.displayName = 'OnesyIconMaterialDeskphoneFilled';

export default IconMaterialDeskphoneFilled;
