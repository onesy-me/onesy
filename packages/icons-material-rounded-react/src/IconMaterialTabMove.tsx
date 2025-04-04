import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMove'

      short_name='TabMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-80q0-17 11.5-28.5T160-320q17 0 28.5 11.5T200-280v80h560v-480H200v80q0 17-11.5 28.5T160-560q-17 0-28.5-11.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm287-280H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h327l-55-56q-11-11-11.5-27.5T432-592q11-11 28-11t28 11l124 124q12 12 12 28t-12 28L488-288q-11 11-27.5 11.5T432-288q-11-11-11-28t11-28l55-56Z"/>
    </Icon>
  );
});

IconMaterialTabMove.displayName = 'OnesyIconMaterialTabMove';

export default IconMaterialTabMove;
