import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardW100Filled'

      short_name='Forward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-520 614-694q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l173 173q5 5 7 10t2 11q0 6-2 11t-7 10L634-326q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l174-174Zm-168 14H306q-60 0-103 43t-43 103v94q0 6-4 10t-10 4q-6 0-10-4t-4-10v-94q0-72 51-123t123-51h314L460-694q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l173 173q5 5 7 10t2 11q0 6-2 11t-7 10L480-326q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l160-160Z"/>
    </Icon>
  );
});

IconMaterialForwardW100Filled.displayName = 'OnesyIconMaterialForwardW100Filled';

export default IconMaterialForwardW100Filled;
