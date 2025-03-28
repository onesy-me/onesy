import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbSunnyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunnyW100Filled'

      short_name='WbSunny'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-806v-88h28v88h-28Zm0 740v-88h28v88h-28Zm340-400v-28h88v28h-88Zm-740 0v-28h88v28H66Zm662-242-20-20 54-54 20 20-54 54ZM198-178l-20-20 54-54 20 20-54 54Zm564 0-54-54 20-20 54 54-20 20ZM232-708l-54-54 20-20 54 54-20 20Zm248.24 416Q402-292 347-346.76q-55-54.77-55-133Q292-558 346.76-613q54.77-55 133-55Q558-668 613-613.24q55 54.77 55 133Q668-402 613.24-347q-54.77 55-133 55Z"/>
    </Icon>
  );
});

IconMaterialWbSunnyW100Filled.displayName = 'OnesyIconMaterialWbSunnyW100Filled';

export default IconMaterialWbSunnyW100Filled;
