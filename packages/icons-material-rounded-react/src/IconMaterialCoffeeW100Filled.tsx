import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoffeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeW100Filled'

      short_name='Coffee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-280q-99 0-170-65.5T212-508v-252q0-11 8.5-19.5T240-788h487q42 0 71.5 27.5T828-692q0 44-29 75t-72 31h-43v78q0 95-67.5 161.5T453-280ZM240-614h416v-146H240v146Zm444 0h43q31 0 52-23t21-55q0-29-22-48.5T727-760h-43v146ZM226-172q-6 0-10-4t-4-10q0-6 4-10t10-4h508q6 0 10 4t4 10q0 6-4 10t-10 4H226Z"/>
    </Icon>
  );
});

IconMaterialCoffeeW100Filled.displayName = 'OnesyIconMaterialCoffeeW100Filled';

export default IconMaterialCoffeeW100Filled;
