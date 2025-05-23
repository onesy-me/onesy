import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseW100'

      short_name='Close'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-460 266-246q-4 4-9.5 4.5T246-246q-5-5-5-10t5-10l214-214-214-214q-4-4-4.5-9.5T246-714q5-5 10-5t10 5l214 214 214-214q4-4 9.5-4.5T714-714q5 5 5 10t-5 10L500-480l214 214q4 4 4.5 9.5T714-246q-5 5-10 5t-10-5L480-460Z"/>
    </Icon>
  );
});

IconMaterialCloseW100.displayName = 'OnesyIconMaterialCloseW100';

export default IconMaterialCloseW100;
