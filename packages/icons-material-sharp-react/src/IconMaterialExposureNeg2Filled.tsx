import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureNeg2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg2Filled'

      short_name='ExposureNeg2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M484-200v-84l200-204q33-35 46.5-58.5T744-600q0-29-22.5-52.5T654-676q-36 0-59.5 20T562-604l-80-32q14-45 58-84.5T656-760q83 0 129.5 47.5T832-600q0 45-21 82t-65 82L600-284l2 4h238v80H484Zm-84-200H120v-80h280v80Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2Filled.displayName = 'OnesyIconMaterialExposureNeg2Filled';

export default IconMaterialExposureNeg2Filled;
