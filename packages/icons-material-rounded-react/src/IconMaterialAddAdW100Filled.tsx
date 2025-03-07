import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddAdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAdW100Filled'

      short_name='AddAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-312H624q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H758v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106ZM142-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v154q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-98H110v440q0 14 9 23t23 9h474q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H142Z"/>
    </Icon>
  );
});

IconMaterialAddAdW100Filled.displayName = 'OnesyIconMaterialAddAdW100Filled';

export default IconMaterialAddAdW100Filled;
