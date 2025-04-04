import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chess'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-80H200v80Zm132-160h296l-23-160H355l-23 160ZM160-80q-17 0-28.5-11.5T120-120v-120q0-33 23.5-56.5T200-320h52l22-160h-74q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560h560q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480h-74l22 160h52q33 0 56.5 23.5T840-240v120q0 17-11.5 28.5T800-80H160Zm320-783q8 0 16 2.5t15 7.5q23 18 49 30t55 12q21 0 40-6t37-16q10-5 19.5-4.5T729-832q8 5 11.5 13.5T742-800l-53 240h-82l39-173-7.5 1q-7.5 1-23.5 1-36 0-70.5-11T480-773q-29 20-62.5 31T349-731q-18 0-26.5-1l-8.5-1 39 173h-82l-53-240q-2-11 1.5-19.5T231-833q8-5 18-5.5t19 5.5q18 10 37 16t40 6q29 0 55-12t49-30q7-5 15-7.5t16-2.5Zm0 383Zm0-80Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialChess.displayName = 'OnesyIconMaterialChess';

export default IconMaterialChess;
