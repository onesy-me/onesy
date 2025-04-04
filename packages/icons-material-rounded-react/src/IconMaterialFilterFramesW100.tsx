import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFramesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesW100'

      short_name='FilterFrames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h160l107-107q9-9 21-9t21 9l107 107h160q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-496q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm68-130v-300q0-13 8.5-21.5T290-620h380q13 0 21.5 8.5T700-590v300q0 13-8.5 21.5T670-260H290q-13 0-21.5-8.5T260-290Zm28 2h384v-304H288v304Zm192-152Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesW100.displayName = 'OnesyIconMaterialFilterFramesW100';

export default IconMaterialFilterFramesW100;
