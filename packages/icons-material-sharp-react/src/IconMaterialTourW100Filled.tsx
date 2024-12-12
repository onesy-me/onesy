import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTourW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourW100Filled'

      short_name='Tour'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-106v-748h28v80h548l-70 174 70 174H254v320h-28Zm274-440q23 0 38.5-15.5T554-600q0-23-15.5-38.5T500-654q-23 0-38.5 15.5T446-600q0 23 15.5 38.5T500-546Z"/>
    </Icon>
  );
});

IconMaterialTourW100Filled.displayName = 'OnesyIconMaterialTourW100Filled';

export default IconMaterialTourW100Filled;
