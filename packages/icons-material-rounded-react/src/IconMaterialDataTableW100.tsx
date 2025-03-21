import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableW100'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-420h560v-136q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v136Zm0 196h560v-168H200v168Zm32 196h496q12 0 22-10t10-22v-136H200v136q0 12 10 22t22 10Zm77.82-446q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm0 196q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm0 196q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialDataTableW100.displayName = 'OnesyIconMaterialDataTableW100';

export default IconMaterialDataTableW100;
