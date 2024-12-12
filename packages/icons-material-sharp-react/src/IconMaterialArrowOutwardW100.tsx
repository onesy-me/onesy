import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOutwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardW100'

      short_name='ArrowOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m245-277-19-19 409-410H255v-28h428v428h-28v-380L245-277Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardW100.displayName = 'OnesyIconMaterialArrowOutwardW100';

export default IconMaterialArrowOutwardW100;
