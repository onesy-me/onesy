import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseW100'

      short_name='BottomPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m501-516 71-71q7-7 3-16.5t-14-9.5H399q-10 0-14 9.5t3 16.5l71 71q9 9 21 9t21-9Zm227-272q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496ZM200-320v88q0 12 10 22t22 10h496q12 0 22-10t10-22v-88H200Zm560-28v-380q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380h560Zm-560 28v120-120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseW100.displayName = 'OnesyIconMaterialBottomPanelCloseW100';

export default IconMaterialBottomPanelCloseW100;
