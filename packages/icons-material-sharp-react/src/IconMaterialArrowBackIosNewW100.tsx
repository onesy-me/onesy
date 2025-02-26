import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIosNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewW100'

      short_name='ArrowBackIosNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-116 276-480l364-364 34 34-330 330 330 330-34 34Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewW100.displayName = 'OnesyIconMaterialArrowBackIosNewW100';

export default IconMaterialArrowBackIosNewW100;
