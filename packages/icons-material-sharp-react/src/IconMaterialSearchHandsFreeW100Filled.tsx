import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchHandsFreeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchHandsFreeW100Filled'

      short_name='SearchHandsFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM466-162v-170q-51-11-87-47t-47-87H162q6 124 93 210t211 94Zm28 0q124-8 211-94t93-210H628q-11 51-47 87t-87 47v170ZM162-494h170l90-94h116l90 94h170q-6-129-98-217.5T480-800q-128 0-220 88.5T162-494Z"/>
    </Icon>
  );
});

IconMaterialSearchHandsFreeW100Filled.displayName = 'OnesyIconMaterialSearchHandsFreeW100Filled';

export default IconMaterialSearchHandsFreeW100Filled;
