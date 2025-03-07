import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowTopRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopRightW100Filled'

      short_name='ArrowTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-586H312q-14 0-23 9t-9 23v328q0 6-4 10t-10 4q-6 0-10-4t-4-10v-328q0-25 17.5-42.5T312-614h382L550-758q-4-4-4.5-9.5T550-778q5-5 10-5t10 5l157 157q5 5 7 10t2 11q0 6-2 11t-7 10L570-422q-4 4-9.5 4.5T550-422q-5-5-5-10t5-10l144-144Z"/>
    </Icon>
  );
});

IconMaterialArrowTopRightW100Filled.displayName = 'OnesyIconMaterialArrowTopRightW100Filled';

export default IconMaterialArrowTopRightW100Filled;
