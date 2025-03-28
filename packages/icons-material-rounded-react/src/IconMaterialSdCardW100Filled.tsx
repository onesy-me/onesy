import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardW100Filled'

      short_name='SdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-401q0-12.44 5-23.72T230-636l174-174q8-8 19.28-13 11.28-5 23.72-5h241q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm132.04-400q5.96 0 9.96-4.03 4-4.02 4-9.97v-102q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v102q0 5.95 4.04 9.97 4.03 4.03 10 4.03Zm110 0q5.96 0 9.96-4.03 4-4.02 4-9.97v-102q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v102q0 5.95 4.04 9.97 4.03 4.03 10 4.03Zm110 0q5.96 0 9.96-4.03 4-4.02 4-9.97v-102q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v102q0 5.95 4.04 9.97 4.03 4.03 10 4.03Z"/>
    </Icon>
  );
});

IconMaterialSdCardW100Filled.displayName = 'OnesyIconMaterialSdCardW100Filled';

export default IconMaterialSdCardW100Filled;
