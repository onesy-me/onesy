import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalParking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParking'

      short_name='LocalParking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-720h280q100 0 170 70t70 170q0 100-70 170t-170 70H400v240H240Zm160-400h128q33 0 56.5-23.5T608-600q0-33-23.5-56.5T528-680H400v160Z"/>
    </Icon>
  );
});

IconMaterialLocalParking.displayName = 'OnesyIconMaterialLocalParking';

export default IconMaterialLocalParking;
