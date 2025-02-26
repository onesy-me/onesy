import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarginW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarginW100Filled'

      short_name='Margin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm94-433q11 0 19.5-8.5T354-633q0-11-8.5-19.5T326-661q-11 0-19.5 8.5T298-633q0 11 8.5 19.5T326-605Zm154 0q11 0 19.5-8.5T508-633q0-11-8.5-19.5T480-661q-11 0-19.5 8.5T452-633q0 11 8.5 19.5T480-605Zm154 0q11 0 19.5-8.5T662-633q0-11-8.5-19.5T634-661q-11 0-19.5 8.5T606-633q0 11 8.5 19.5T634-605Zm0 153q11 0 19.5-8.5T662-480q0-11-8.5-19.5T634-508q-11 0-19.5 8.5T606-480q0 11 8.5 19.5T634-452Zm-154 0q11 0 19.5-8.5T508-480q0-11-8.5-19.5T480-508q-11 0-19.5 8.5T452-480q0 11 8.5 19.5T480-452Zm-154 0q11 0 19.5-8.5T354-480q0-11-8.5-19.5T326-508q-11 0-19.5 8.5T298-480q0 11 8.5 19.5T326-452Z"/>
    </Icon>
  );
});

IconMaterialMarginW100Filled.displayName = 'OnesyIconMaterialMarginW100Filled';

export default IconMaterialMarginW100Filled;
