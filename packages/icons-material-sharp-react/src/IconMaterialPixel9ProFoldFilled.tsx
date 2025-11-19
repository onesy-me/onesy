import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPixel9ProFoldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pixel9ProFoldFilled'

      short_name='Pixel9ProFold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h800v720H80Zm400-80h320v-560H480v560Zm-80-280v-80H160v80h240Zm240-160q17 0 28.5-11.5T680-680q0-17-11.5-28.5T640-720q-17 0-28.5 11.5T600-680q0 17 11.5 28.5T640-640Zm-240 0v-80H160v80h240Z"/>
    </Icon>
  );
});

IconMaterialPixel9ProFoldFilled.displayName = 'OnesyIconMaterialPixel9ProFoldFilled';

export default IconMaterialPixel9ProFoldFilled;
