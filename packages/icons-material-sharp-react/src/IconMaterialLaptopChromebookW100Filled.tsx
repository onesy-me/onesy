import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopChromebookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookW100Filled'

      short_name='LaptopChromebook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-248v-28h80v-484h696v484h80v28H52Zm348-28h160v-28H400v28Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookW100Filled.displayName = 'OnesyIconMaterialLaptopChromebookW100Filled';

export default IconMaterialLaptopChromebookW100Filled;
