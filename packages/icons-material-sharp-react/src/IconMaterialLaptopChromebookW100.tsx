import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopChromebookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookW100'

      short_name='LaptopChromebook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-248v-28h80v-484h696v484h80v28H52Zm348-28h160v-28H400v28Zm-240-56h640v-400H160v400Zm320-200Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookW100.displayName = 'OnesyIconMaterialLaptopChromebookW100';

export default IconMaterialLaptopChromebookW100;
