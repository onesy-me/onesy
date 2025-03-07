import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScience = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Science'

      short_name='Science'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="13,6 11,6 11,11.33 6,18 18,18 13,11.33"/><path d="M20.8,18.4L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4 C2.71,19.06,3.18,20,4,20h16C20.82,20,21.29,19.06,20.8,18.4z M6,18l5-6.67V6h2v5.33L18,18H6z"/></g></g>
    </Icon>
  );
});

IconMaterialScience.displayName = 'OnesyIconMaterialScience';

export default IconMaterialScience;
