import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddW100'

      short_name='CakeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-276h80v-228h214v-60q-17-11-28.5-24.5T386-751.85q0-11.15 4-20.7 4-9.55 12-17.45l38-38 37.88 37.88Q486-782 490-772.5q4 9.5 4 20.65 0 17.85-11.5 31.35T454-696v60h214v228h80v276H132Zm108-276h400v-200H240v200Zm-80 248h560v-220H160v220Zm80-248h400-400Zm-80 248h560-560Zm508-248H212h456Zm92-232v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialCakeAddW100.displayName = 'OnesyIconMaterialCakeAddW100';

export default IconMaterialCakeAddW100;
