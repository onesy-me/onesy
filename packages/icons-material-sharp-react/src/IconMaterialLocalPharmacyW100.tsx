import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPharmacyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacyW100'

      short_name='LocalPharmacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-20l82-248-82-248v-20h476l52-144 26 10-48 134h110v20l-82 248 82 248v20H172Zm294-144h28v-110h110v-28H494v-110h-28v110H356v28h110v110ZM204-200h552l-80-240 80-240H204l80 240-80 240Zm276-240Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacyW100.displayName = 'OnesyIconMaterialLocalPharmacyW100';

export default IconMaterialLocalPharmacyW100;
