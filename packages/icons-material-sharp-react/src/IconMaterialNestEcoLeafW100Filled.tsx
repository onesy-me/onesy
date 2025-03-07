import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestEcoLeafW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestEcoLeafW100Filled'

      short_name='NestEcoLeaf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M191-195q-4-4-4-9.67 0-5.66 4-9.33l90-90q-32-36-50.5-82.15Q212-432.31 212-484q0-112.22 77.89-190.11Q367.77-752 480-752h268v268q0 112.23-77.89 190.11Q592.22-216 480-216q-51.66 0-97.33-18.5T301-285l-91 90q-3.67 4-9.33 4-5.67 0-9.67-4Zm163-163.16q4 4.16 9.54 4.01 5.55-.16 9.46-3.85l157-156q5-5 5-10t-4.7-9.7q-4.3-4.3-9.97-4.3-5.66 0-9.33 4L354-377q-4 3.75-4 9.37 0 5.63 4 9.47Z"/>
    </Icon>
  );
});

IconMaterialNestEcoLeafW100Filled.displayName = 'OnesyIconMaterialNestEcoLeafW100Filled';

export default IconMaterialNestEcoLeafW100Filled;
