import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBidLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeFilled'

      short_name='BidLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-550L518-398 388-528q-12-12-28-12t-28 12L200-396v114l160-160 132 132q12 12 29.5 11.5T550-312l210-238v-120Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeFilled.displayName = 'OnesyIconMaterialBidLandscapeFilled';

export default IconMaterialBidLandscapeFilled;
