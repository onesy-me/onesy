import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceW100Filled'

      short_name='QuickReference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M630-212h28v-108h-28v108Zm14-139q6 1 10-3.5t4-10.5q0-6-4.29-10-4.28-4-10-4-5.71 0-9.71 4.07-4 4.07-4 9.5t4.2 9.93q4.2 4.5 9.8 4.5Zm0 203q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM532-652h148L532-800l148 148-148-148v148ZM172-132v-696h374l162 162v130q-16-5-31.5-6.5T644-544q-58 0-107.5 24T453-454H306v28h127q-17 29-27 62.5T396-294h-90v28h91.78Q403-229 418-195t40 63H172Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceW100Filled.displayName = 'OnesyIconMaterialQuickReferenceW100Filled';

export default IconMaterialQuickReferenceW100Filled;
