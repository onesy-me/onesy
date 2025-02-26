import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignatureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignatureW100Filled'

      short_name='Signature'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M510-422q92-60 146-133t54-144q0-45-19-73t-50-28q-62 0-102 80.5T499-515q0 28 3 51t8 42ZM171-172v-52h52v52h-52Zm141 0v-52h52v52h-52Zm141 0v-52h52v52h-52Zm141 0v-52h52v52h-52Zm141 0v-52h52v52h-52ZM151-317l-19-19 64-64-64-64 19-19 64 64 64-64 19 19-64 64 64 64-19 19-64-64-64 64Zm434-3q-30 0-52.5-15T496-379q-23 14-48.5 26T395-330l-10-26q26-11 51.5-23.5T485-406q-7-22-10.5-49.5T471-515q0-139 47.5-226T641-828q44 0 70.5 35.5T738-699q0 81-59 161.5T520-394q11 23 27.5 34.5T585-348q34 0 70.5-30t65.5-81l23 11q-5 36-2 60t17 41q14-7 25.5-14.5T814-390l22 18q-26 26-44.5 39T756-320q-17 0-29-22.5T712-397q-23 35-59 56t-68 21Z"/>
    </Icon>
  );
});

IconMaterialSignatureW100Filled.displayName = 'OnesyIconMaterialSignatureW100Filled';

export default IconMaterialSignatureW100Filled;
