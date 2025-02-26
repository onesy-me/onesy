import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIosNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewFilled'

      short_name='ArrowBackIosNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m382-480 294 294q15 15 14.5 35T675-116q-15 15-35 15t-35-15L297-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T676-844q15 15 15 35t-15 35L382-480Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewFilled.displayName = 'OnesyIconMaterialArrowBackIosNewFilled';

export default IconMaterialArrowBackIosNewFilled;
