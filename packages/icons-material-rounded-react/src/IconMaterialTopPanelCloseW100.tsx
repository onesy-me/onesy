import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseW100'

      short_name='TopPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-444-71 71q-7 7-3 16.5t14 9.5h162q10 0 14-9.5t-3-16.5l-71-71q-9-9-21-9t-21 9ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm528-468v-88q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v88h560Zm-560 28v380q0 12 10 22t22 10h496q12 0 22-10t10-22v-380H200Zm0-28v-120 120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseW100.displayName = 'OnesyIconMaterialTopPanelCloseW100';

export default IconMaterialTopPanelCloseW100;
