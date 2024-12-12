import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100Filled'

      short_name='Mail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm348-274 320-212v-22L480-520 160-720v22l320 212Z"/>
    </Icon>
  );
});

IconMaterialMailW100Filled.displayName = 'OnesyIconMaterialMailW100Filled';

export default IconMaterialMailW100Filled;
