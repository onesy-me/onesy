import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackW100Filled'

      short_name='ArrowBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m266-466 224 224q4 4 4.5 9.5T490-222q-5 5-10 5t-10-5L233-459q-5-5-7-10t-2-11q0-6 2-11t7-10l237-237q4-4 9.5-4.5T490-738q5 5 5 10t-5 10L266-494h468q6 0 10 4t4 10q0 6-4 10t-10 4H266Z"/>
    </Icon>
  );
});

IconMaterialArrowBackW100Filled.displayName = 'OnesyIconMaterialArrowBackW100Filled';

export default IconMaterialArrowBackW100Filled;
