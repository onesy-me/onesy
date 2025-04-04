import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemurW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurW100Filled'

      short_name='Femur'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-128q-25 0-44-16t-24-41q-7-39-32-61t-62-22q-5 0-10.5.5T213-266q-32 6-57-15t-25-53q0-25 16-44t41-24l140-24 145-208q12-18 10-36t-17-32q-8-8-11-17.5t-3-17.5q0-20 12.5-33t32.5-13q13 0 23.5 4.5T537-769q8 5 26 14t47 10q-8-23 1.5-45t31.5-30q23-8 45 2t30 33l50 140q8 23-2 44t-32 29q-23 9-44.5-2.5T660-608q-15-2-29.5 3.5T606-586L439-346l25 137q6 32-15 56.5T396-128Z"/>
    </Icon>
  );
});

IconMaterialFemurW100Filled.displayName = 'OnesyIconMaterialFemurW100Filled';

export default IconMaterialFemurW100Filled;
