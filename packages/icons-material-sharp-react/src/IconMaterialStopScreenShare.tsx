import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopScreenShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShare'

      short_name='StopScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M577-497 474-600h46v-80l120 120-63 63Zm251 251-74-74h46v-440H314l-80-80h646v594h-52Zm-8 218-92-92H40v-80h607l-40-40H80v-526l-52-54 56-56L876-84l-56 56ZM400-446v46h-80v-80q0-11 1-21t6-19L160-687v367h366L400-446Zm134-94Zm-191 36Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShare.displayName = 'OnesyIconMaterialStopScreenShare';

export default IconMaterialStopScreenShare;
