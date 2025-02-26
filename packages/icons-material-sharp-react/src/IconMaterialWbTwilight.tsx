import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbTwilight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilight'

      short_name='WbTwilight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m734-556-56-58 86-84 56 56-86 86ZM80-160v-80h800v80H80Zm360-520v-120h80v120h-80ZM226-558l-84-86 56-56 86 86-58 56Zm71 158h366q-23-54-72-87t-111-33q-62 0-111 33t-72 87Zm-97 80q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Zm280-80Z"/>
    </Icon>
  );
});

IconMaterialWbTwilight.displayName = 'OnesyIconMaterialWbTwilight';

export default IconMaterialWbTwilight;
