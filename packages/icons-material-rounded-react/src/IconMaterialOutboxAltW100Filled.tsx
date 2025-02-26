import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboxAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAltW100Filled'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587-453q17-8 17-27t-17-27L335-624q-15-7-29 1.5T292-597v68l148 49-148 49v68q0 17 14 25.5t29 1.5l252-117Zm59-27ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialOutboxAltW100Filled.displayName = 'OnesyIconMaterialOutboxAltW100Filled';

export default IconMaterialOutboxAltW100Filled;
