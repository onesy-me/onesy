import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeW100'

      short_name='Cake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-132q-11 0-18.5-8.5T172-160v-188q0-25 17.5-42.5T232-408h20v-168q0-25 17.5-42.5T312-636h154v-60q-17-11-28.5-24.5T426-752q0-11 4-20.5t12-17.5l27-27q1-1 11-5 2 0 11 5l27 27q8 8 12 17.5t4 20.5q0 18-11.5 31.5T494-696v60h154q25 0 42.5 17.5T708-576v168h20q25 0 42.5 17.5T788-348v188q0 11-8.5 19.5T760-132H198Zm82-276h400v-168q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v168Zm-80 248h560v-188q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v188Zm80-248h400-400Zm-80 248h560-560Zm508-248H252h456Z"/>
    </Icon>
  );
});

IconMaterialCakeW100.displayName = 'OnesyIconMaterialCakeW100';

export default IconMaterialCakeW100;
