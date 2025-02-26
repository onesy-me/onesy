import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftFilled'

      short_name='ChevronLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftFilled.displayName = 'OnesyIconMaterialChevronLeftFilled';

export default IconMaterialChevronLeftFilled;
