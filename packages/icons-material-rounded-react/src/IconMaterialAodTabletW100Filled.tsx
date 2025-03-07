import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodTabletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletW100Filled'

      short_name='AodTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-24.75 0-42.37-17.63Q92-247.25 92-272v-416q0-24.75 17.63-42.38Q127.25-748 152-748h656q24.75 0 42.38 17.62Q868-712.75 868-688v416q0 24.75-17.62 42.37Q832.75-212 808-212H152Zm62-28h532v-480H214v480Zm146-276q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h240q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H360Zm40 120q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h160q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H400Z"/>
    </Icon>
  );
});

IconMaterialAodTabletW100Filled.displayName = 'OnesyIconMaterialAodTabletW100Filled';

export default IconMaterialAodTabletW100Filled;
