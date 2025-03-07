import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPottedPlantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantW100'

      short_name='PottedPlant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-160h286l55-217H281l55 217Zm-22 28-62-245h454l-62 245H314ZM200-405h560v-100H200v100Zm279-229q0-76 59.5-129.5T675-827q-11 71-61 124t-121 68v102h295v156H172v-156h293v-102q-71-15-121-67.5T283-827q76 10 136 64t60 129Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantW100.displayName = 'OnesyIconMaterialPottedPlantW100';

export default IconMaterialPottedPlantW100;
