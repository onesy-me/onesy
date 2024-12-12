import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClearDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearDayW100Filled'

      short_name='ClearDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-738v-128h28v128h-28Zm206 86-19-19 89-93 21 21-91 91Zm66 186v-28h128v28H738ZM466-94v-127h28v127h-28ZM290-653l-94-89 22-20 91 90-19 19Zm452 457-89-93 19-18 90 89-20 22ZM94-466v-28h128v28H94Zm123 270-19-22 89-89 10 10 11 10-91 91Zm263.24-96Q402-292 347-346.76q-55-54.77-55-133Q292-558 346.76-613q54.77-55 133-55Q558-668 613-613.24q55 54.77 55 133Q668-402 613.24-347q-54.77 55-133 55Z"/>
    </Icon>
  );
});

IconMaterialClearDayW100Filled.displayName = 'OnesyIconMaterialClearDayW100Filled';

export default IconMaterialClearDayW100Filled;
