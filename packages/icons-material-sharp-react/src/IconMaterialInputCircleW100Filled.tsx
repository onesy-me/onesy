import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInputCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputCircleW100Filled'

      short_name='InputCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-588 317-425l19 19 130-128v380h28v-380l130 128 19-19-163-163ZM173-317q-20-38-30.5-78.94Q132-436.87 132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480q0 43.13-10.5 84.06Q807-355 787-317l-20-20q17-35 25-70.42 8-35.43 8-72.58 0-134-93-227t-227-93q-134 0-227 93t-93 227q0 38 8.5 74.18Q177-369.65 194-337l-21 20Z"/>
    </Icon>
  );
});

IconMaterialInputCircleW100Filled.displayName = 'OnesyIconMaterialInputCircleW100Filled';

export default IconMaterialInputCircleW100Filled;
