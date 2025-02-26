import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelPresentationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationW100Filled'

      short_name='CancelPresentation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m460-480-94 94q-4 4-4.5 9.5T366-366q5 5 10 5t10-5l94-94 94 94q4 4 9.5 4.5T594-366q5-5 5-10t-5-10l-94-94 94-94q4-4 4.5-9.5T594-594q-5-5-10-5t-10 5l-94 94-94-94q-4-4-9.5-4.5T366-594q-5 5-5 10t5 10l94 94ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationW100Filled.displayName = 'OnesyIconMaterialCancelPresentationW100Filled';

export default IconMaterialCancelPresentationW100Filled;
