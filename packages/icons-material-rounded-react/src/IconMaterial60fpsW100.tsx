import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fpsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsW100'

      short_name='60fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M334-246H186q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h154q6 0 10 4t4 10q0 6-4 10t-10 4H186q-14 0-23 9t-9 23v140h180q26 0 43 17t17 43v148q0 26-17 43t-43 17ZM154-486v180q0 14 9 23t23 9h148q14 0 23-9t9-23v-148q0-14-9-23t-23-9H154Zm432 212h188q14 0 23-9t9-23v-348q0-14-9-23t-23-9H586q-14 0-23 9t-9 23v348q0 14 9 23t23 9Zm0 28q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h188q26 0 43 17t17 43v348q0 26-17 43t-43 17H586Z"/>
    </Icon>
  );
});

IconMaterial60fpsW100.displayName = 'OnesyIconMaterial60fpsW100';

export default IconMaterial60fpsW100;
