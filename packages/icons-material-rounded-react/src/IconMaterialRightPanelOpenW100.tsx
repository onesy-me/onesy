import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenW100'

      short_name='RightPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M465-399v-162q0-10-9.5-14t-16.5 3l-71 71q-9 9-9 21t9 21l71 71q7 7 16.5 3t9.5-14ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm408-28h120v-528q0-12-10-22t-22-10h-88v560Zm-28 0v-560H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h380Zm28 0h120-120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenW100.displayName = 'OnesyIconMaterialRightPanelOpenW100';

export default IconMaterialRightPanelOpenW100;
