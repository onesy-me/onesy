import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRate'

      short_name='StarRate'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><polygon enableBackground="new" opacity=".3" points="12.94,12 12,8.89 11.06,12 8.24,12 10.51,13.62 9.58,16.63 12,14.79 14.42,16.63 13.49,13.62 15.76,12"/><path d="M22,10h-7.58L12,2l-2.42,8H2l6.17,4.41L5.83,22L12,17.31L18.17,22l-2.35-7.59L22,10z M14.42,16.63L12,14.79l-2.42,1.84 l0.93-3.01L8.24,12h2.82L12,8.89L12.94,12h2.82l-2.27,1.62L14.42,16.63z"/></g>
    </Icon>
  );
});

IconMaterialStarRate.displayName = 'OnesyIconMaterialStarRate';

export default IconMaterialStarRate;
