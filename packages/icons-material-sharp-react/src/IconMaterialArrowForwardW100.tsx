import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardW100'

      short_name='ArrowForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-466H212v-28h482L460-728l20-20 268 268-268 268-20-20 234-234Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardW100.displayName = 'OnesyIconMaterialArrowForwardW100';

export default IconMaterialArrowForwardW100;
