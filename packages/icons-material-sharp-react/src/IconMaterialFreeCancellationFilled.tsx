import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFreeCancellationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationFilled'

      short_name='FreeCancellation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-60 520-202l56-56 85 85 170-170 56 57L662-60ZM296-280l-56-56 64-64-64-64 56-56 64 64 64-64 56 56-64 64 64 64-56 56-64-64-64 64ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v334l-80 81v-175H200v400h250l79 80H120Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationFilled.displayName = 'OnesyIconMaterialFreeCancellationFilled';

export default IconMaterialFreeCancellationFilled;
