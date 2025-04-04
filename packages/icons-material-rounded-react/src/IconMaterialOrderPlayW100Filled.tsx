import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrderPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderPlayW100Filled'

      short_name='OrderPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m701-177 70-44q7-4.5 7-12.75T771-247l-70-44q-8-5-15.5-.7-7.5 4.31-7.5 13.7v88q0 9.39 7.5 13.7 7.5 4.3 15.5-.7Zm-35-437q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H294q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h372Zm54 528q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86ZM232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v229q-38-11-77.5-9.5T633-494H294q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h281q-34 22-59.5 52.5T474-346H294q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h170q-5 18-8 36.5t-3 38.5q0 23 4 46.72T469-151l-41-25-44 27q-4 2-8 2t-8-2l-44-27-44 27q-4 2-8 2t-8-2l-45-27-38 27q-3 2-9 4v-583q0-24.75 17.63-42.38Q207.25-788 232-788Z"/>
    </Icon>
  );
});

IconMaterialOrderPlayW100Filled.displayName = 'OnesyIconMaterialOrderPlayW100Filled';

export default IconMaterialOrderPlayW100Filled;
