import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhpW100'

      short_name='Php'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M142-376v-208h168v132H170v76h-28Zm264 0v-208h28v80h112v-80h28v208h-28v-100H434v100h-28Zm266 0v-208h168v132H700v76h-28ZM170-480h112v-74H170v74Zm530 0h112v-74H700v74Z"/>
    </Icon>
  );
});

IconMaterialPhpW100.displayName = 'OnesyIconMaterialPhpW100';

export default IconMaterialPhpW100;
