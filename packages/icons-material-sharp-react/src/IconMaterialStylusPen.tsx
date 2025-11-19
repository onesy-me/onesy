import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusPen'

      short_name='StylusPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-320 100-360h60v-60l60-140h40l60 140v60h60l100 360H240Zm105-80h270l-56-200H401l-56 200ZM160-120l40-120h560l40 120H160Zm185-280h270-270Z"/>
    </Icon>
  );
});

IconMaterialStylusPen.displayName = 'OnesyIconMaterialStylusPen';

export default IconMaterialStylusPen;
