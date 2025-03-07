import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartCardReaderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderOff'

      short_name='SmartCardReaderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-932q33 0 56.5 23.5T760-852v392q0 17-11.5 28.5T720-420q-17 0-28.5-12T680-461v-391H313q-17 0-28.5-11.5T273-892q0-17 11.5-28.5T313-932h367Zm-91 396L485-639q9-23 29-38t46-15q33 0 56.5 23.5T640-612q0 26-14 46.5T589-536ZM320-692l118 118q-2 24-10 47t-22 43q-11 14-25 24.5T350-449q-13 0-21.5-8.5T320-479v-213ZM160-212h527l-40-40H160v40Zm-40 80q-17 0-28.5-11.5T80-172v-80q0-33 23.5-56.5T160-332h407L280-620v188q0 17-11.5 28.5T240-392q-17 0-28.5-11.5T200-432v-268L56-844q-11-11-11.5-27.5T56-900q11-11 28-11t28 11l736 735q12 12 11.5 28T847-109q-12 12-28.5 12T790-109l-23-23H120Zm304-80Zm52-436Zm-82 142Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderOff.displayName = 'OnesyIconMaterialSmartCardReaderOff';

export default IconMaterialSmartCardReaderOff;
