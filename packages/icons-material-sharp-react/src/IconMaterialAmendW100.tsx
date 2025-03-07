import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmendW100'

      short_name='Amend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-372h400v-28H280v28Zm0-108h128v-28h-80q29-37 67-62.5t85-25.5q56 0 100.5 32t64.5 84h30q-21-64-74.5-104T480-624q-52 0-96 27t-76 69v-80h-28v128Zm200.17 348q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialAmendW100.displayName = 'OnesyIconMaterialAmendW100';

export default IconMaterialAmendW100;
