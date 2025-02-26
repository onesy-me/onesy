import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToRegFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegFilled'

      short_name='HowToReg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-144 484-282l56-56 82 82 202-202 56 56-258 258ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm114 52L368-282l122 122H80v-112q0-33 17-62t47-44q51-26 115-44t141-18q30 0 58.5 3t55.5 9Z"/>
    </Icon>
  );
});

IconMaterialHowToRegFilled.displayName = 'OnesyIconMaterialHowToRegFilled';

export default IconMaterialHowToRegFilled;
