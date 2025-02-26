import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientW100Filled'

      short_name='Outpatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-172v-616h460v616H396v-156H248v156H92Zm128-284h52v-52h-52v52Zm0-152h52v-52h-52v52Zm152 152h52v-52h-52v52Zm0-152h52v-52h-52v52Zm394 231-20-19 70-70H652v-28h164l-70-70 20-19 103 103-103 103Z"/>
    </Icon>
  );
});

IconMaterialOutpatientW100Filled.displayName = 'OnesyIconMaterialOutpatientW100Filled';

export default IconMaterialOutpatientW100Filled;
