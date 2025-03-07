import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPropaneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneW100Filled'

      short_name='Propane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-668h212v-18q0-14-9-23t-23-9H406q-14 0-23 9t-9 23v18Zm-66 376v54q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-54q-78 0-133-54.76-55-54.77-55-133Q92-558 146.83-613q54.84-55 133.17-55h66v-18q0-26 17-43t43-17h148q26 0 43 17t17 43v18h66q78.33 0 133.17 54.76 54.83 54.77 54.83 133Q868-402 813.17-347 758.33-292 680-292v54q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-54H308Z"/>
    </Icon>
  );
});

IconMaterialPropaneW100Filled.displayName = 'OnesyIconMaterialPropaneW100Filled';

export default IconMaterialPropaneW100Filled;
