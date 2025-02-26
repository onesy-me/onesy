import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvFilled'

      short_name='Tv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80H80v-640h800v640H640v80H320Z"/>
    </Icon>
  );
});

IconMaterialTvFilled.displayName = 'OnesyIconMaterialTvFilled';

export default IconMaterialTvFilled;
