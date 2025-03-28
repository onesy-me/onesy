import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBlockingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingW100'

      short_name='AppBlocking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-336q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm0-28q20 0 37.5-6t34.5-18L602-552q-12 17-18 34.5t-6 37.5q0 48 34 82t82 34Zm92-44q14-18 19-35t5-37q0-48-34-82t-82-34q-20 0-37.5 6T622-572l164 164ZM252-92v-776h456v184h-28v-62H280v532h400v-62h28v184H252Zm28-94v66h400v-66H280Zm0-588h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingW100.displayName = 'OnesyIconMaterialAppBlockingW100';

export default IconMaterialAppBlockingW100;
