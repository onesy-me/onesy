import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColors'

      short_name='InvertColors'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M7.75,8.99C6.62,10.1,6,11.57,6,13.13C6,16.37,8.69,19,12,19l0-14.19L7.75,8.99z" opacity=".3"/><path d="M17.65,7.56L17.65,7.56L12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87 C20,10.96,19.1,8.99,17.65,7.56z M6,13.13c0-1.56,0.62-3.03,1.75-4.14L12,4.81L12,19C8.69,19,6,16.37,6,13.13z"/></g></g>
    </Icon>
  );
});

IconMaterialInvertColors.displayName = 'OnesyIconMaterialInvertColors';

export default IconMaterialInvertColors;
