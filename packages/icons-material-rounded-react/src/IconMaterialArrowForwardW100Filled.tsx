import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardW100Filled'

      short_name='ArrowForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-466H226q-6 0-10-4t-4-10q0-6 4-10t10-4h468L470-718q-4-4-4.5-9.5T470-738q5-5 10-5t10 5l237 237q5 5 7 10t2 11q0 6-2 11t-7 10L490-222q-4 4-9.5 4.5T470-222q-5-5-5-10t5-10l224-224Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardW100Filled.displayName = 'OnesyIconMaterialArrowForwardW100Filled';

export default IconMaterialArrowForwardW100Filled;
