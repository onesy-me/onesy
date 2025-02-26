import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPharmacy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacy'

      short_name='LocalPharmacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80l80-240-80-240v-80h508l58-160 94 34-46 126h106v80l-80 240 80 240v80H120Zm320-160h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm-236 80h552l-80-240 80-240H204l80 240-80 240Zm276-240Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacy.displayName = 'OnesyIconMaterialLocalPharmacy';

export default IconMaterialLocalPharmacy;
