import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftFilled'

      short_name='ArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280 360-480l200-200v400Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftFilled.displayName = 'OnesyIconMaterialArrowLeftFilled';

export default IconMaterialArrowLeftFilled;
