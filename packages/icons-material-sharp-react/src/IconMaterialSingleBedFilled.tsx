import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSingleBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedFilled'

      short_name='SingleBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200h-40l-26-80h-54v-280h80v-200h480v200h80v280h-54l-26 80h-40l-26-80H306l-26 80Zm240-360h120v-120H520v120Zm-200 0h120v-120H320v120Z"/>
    </Icon>
  );
});

IconMaterialSingleBedFilled.displayName = 'OnesyIconMaterialSingleBedFilled';

export default IconMaterialSingleBedFilled;
