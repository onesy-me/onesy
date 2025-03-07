import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlobeUkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeUkW100'

      short_name='GlobeUk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q18 0 34.5-2t33.5-6l-48-72H360v-40l80-80h80v-120h-80l-40-40v-80h-88v-69l80-118q-101 29-166.5 113T160-480h40v-80h160v80l-40 40v120H203q42 72 115 116t162 44Zm304-222q8-23 12-47.5t4-50.5q0-112-68-197.5T560-790v110l80 80v80h47l97 138ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialGlobeUkW100.displayName = 'OnesyIconMaterialGlobeUkW100';

export default IconMaterialGlobeUkW100;
