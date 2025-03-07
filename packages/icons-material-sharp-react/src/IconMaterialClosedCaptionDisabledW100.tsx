import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledW100'

      short_name='ClosedCaptionDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-584 28 28H304v152h112v-24h28v52H276v-208h100Zm-52-164h464v464l-28-28v-408H352l-28-28Zm360 320v40l-28-28v-12h28Zm-28-102v-26H544v28l-26-26v-30h166v54h-28Zm-100 14Zm-111 41ZM214-746l26 26h-40v480h480L90-830l20-20L872-88l-20 20-144-144H172v-534h42Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledW100.displayName = 'OnesyIconMaterialClosedCaptionDisabledW100';

export default IconMaterialClosedCaptionDisabledW100;
