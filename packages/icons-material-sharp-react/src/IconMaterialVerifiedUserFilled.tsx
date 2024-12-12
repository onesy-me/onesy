import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedUserFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserFilled'

      short_name='VerifiedUser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserFilled.displayName = 'OnesyIconMaterialVerifiedUserFilled';

export default IconMaterialVerifiedUserFilled;
