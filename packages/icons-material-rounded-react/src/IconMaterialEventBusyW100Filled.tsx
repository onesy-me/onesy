import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventBusyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyW100Filled'

      short_name='EventBusy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-353-82 82q-4 4-9.5 4.5T378-271q-5-5-5-10t5-10l82-82-82-82q-4-4-4.5-9.5T378-475q5-5 10-5t10 5l82 82 82-82q4-4 9.5-4.5T582-475q5 5 5 10t-5 10l-82 82 82 82q4 4 4.5 9.5T582-271q-5 5-10 5t-10-5l-82-82ZM232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-336H200v336q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialEventBusyW100Filled.displayName = 'OnesyIconMaterialEventBusyW100Filled';

export default IconMaterialEventBusyW100Filled;
