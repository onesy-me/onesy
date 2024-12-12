import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatientMedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMedW100'

      short_name='OutpatientMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m772-376-20-20 70-70H659v-27h163l-70-69 21-21 103 103-104 104ZM125-748v-28h376v28H125Zm148 468h80v-100h100v-80H353v-100h-80v100H173v80h100v100ZM85-172v-496h456v496H85Zm228-248ZM113-200h400v-440H113v440Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMedW100.displayName = 'OnesyIconMaterialOutpatientMedW100';

export default IconMaterialOutpatientMedW100;
