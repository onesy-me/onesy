import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Send'

      short_name='Send'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialSend.displayName = 'OnesyIconMaterialSend';

export default IconMaterialSend;
