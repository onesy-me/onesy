import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataTableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableW100Filled'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-592h616v-123q0-18.75-13.12-31.88Q761.75-760 743-760H217q-18.75 0-31.87 13.12Q172-733.75 172-715v123Zm0 196h616v-168H172v168Zm45 196h526q18.75 0 31.88-13.13Q788-226.25 788-245v-123H172v123q0 18.75 13.13 31.87Q198.25-200 217-200Zm64.82-446q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm0 196q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm0 196q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialDataTableW100Filled.displayName = 'OnesyIconMaterialDataTableW100Filled';

export default IconMaterialDataTableW100Filled;
