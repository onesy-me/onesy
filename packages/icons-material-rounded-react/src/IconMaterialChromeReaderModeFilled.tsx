import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeReaderModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeFilled'

      short_name='ChromeReaderMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm360-80h280v-480H520v480Zm210-120q13 0 21.5-8.5T760-390q0-13-8.5-21.5T730-420H590q-13 0-21.5 8.5T560-390q0 13 8.5 21.5T590-360h140Zm0-100q13 0 21.5-8.5T760-490q0-13-8.5-21.5T730-520H590q-13 0-21.5 8.5T560-490q0 13 8.5 21.5T590-460h140Zm0-100q13 0 21.5-8.5T760-590q0-13-8.5-21.5T730-620H590q-13 0-21.5 8.5T560-590q0 13 8.5 21.5T590-560h140Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeFilled.displayName = 'OnesyIconMaterialChromeReaderModeFilled';

export default IconMaterialChromeReaderModeFilled;
