import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsMmaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaW100'

      short_name='SportsMma'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-192v-120h300v120H332Zm-38-180-30-150v-274h376v96h56v176l-32 152H294Zm24-28h324l26-132v-40h-56v-196H292v238l26 130Zm54-172h160v-56H372v56Zm108-12Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaW100.displayName = 'OnesyIconMaterialSportsMmaW100';

export default IconMaterialSportsMmaW100;
