import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialogsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialogsFilled'

      short_name='Dialogs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h320v-320H320v320ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDialogsFilled.displayName = 'OnesyIconMaterialDialogsFilled';

export default IconMaterialDialogsFilled;
