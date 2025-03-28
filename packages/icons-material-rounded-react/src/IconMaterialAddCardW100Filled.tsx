import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardW100Filled'

      short_name='AddCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M786-226H680q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H814v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106ZM160-522h640v-76H160v76Zm32 310q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v204q0 12.75-8.62 21.37Q810.75-454 798-454h-12q-83 0-141.5 58.5T586-254v12q0 12.75-8.62 21.37Q568.75-212 556-212H192Z"/>
    </Icon>
  );
});

IconMaterialAddCardW100Filled.displayName = 'OnesyIconMaterialAddCardW100Filled';

export default IconMaterialAddCardW100Filled;
