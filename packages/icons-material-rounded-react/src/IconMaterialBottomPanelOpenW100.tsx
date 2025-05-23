import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenW100'

      short_name='BottomPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M399-495h162q10 0 14-9.5t-3-16.5l-71-71q-9-9-21-9t-21 9l-71 71q-7 7-3 16.5t14 9.5ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm-32-148v88q0 12 10 22t22 10h496q12 0 22-10t10-22v-88H200Zm0-28h560v-380q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v380Zm0 28v120-120Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenW100.displayName = 'OnesyIconMaterialBottomPanelOpenW100';

export default IconMaterialBottomPanelOpenW100;
