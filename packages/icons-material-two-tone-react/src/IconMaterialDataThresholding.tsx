import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataThresholding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholding'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="19,19 19,17.27 17.27,19"/><path d="M5,17.72L6.72,16h2.12l-3,3h1.83l3-3h2.12l-3,3h1.62l3-3h2.12l-3,3h1.62l3-3H19V5H5V17.72z M10.67,8.17l2,2 l3.67-3.67l1.41,1.41L12.67,13l-2-2l-3,3l-1.41-1.41L10.67,8.17z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19h-1.73L19,17.27V19z M19,16 h-0.85l-3,3h-1.62l3-3h-2.12l-3,3H9.8l3-3h-2.12l-3,3H5.84l3-3H6.72L5,17.72V5h14V16z"/><polygon points="10.67,11 12.67,13 17.75,7.91 16.34,6.5 12.67,10.17 10.67,8.17 6.25,12.59 7.66,14"/></g></g>
    </Icon>
  );
});

IconMaterialDataThresholding.displayName = 'OnesyIconMaterialDataThresholding';

export default IconMaterialDataThresholding;
