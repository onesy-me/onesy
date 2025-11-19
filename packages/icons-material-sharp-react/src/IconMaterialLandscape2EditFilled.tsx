import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscape2EditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2EditFilled'

      short_name='Landscape2Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-120v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L683-120H560Zm263-224 37-39-37-37-38 38 38 38ZM240-560q-50 0-85-35.5T120-680q0-50 35-85t85-35q50 0 85 35t35 85q0 49-35 84.5T240-560ZM46-160l138-276q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5q2 6 13.5 33t13.5 33q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l36 104q-15 5-28.5 13T724-520L480-276v116H46Z"/>
    </Icon>
  );
});

IconMaterialLandscape2EditFilled.displayName = 'OnesyIconMaterialLandscape2EditFilled';

export default IconMaterialLandscape2EditFilled;
