import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsW100Filled'

      short_name='Drafts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-858 348 206v480H132v-480l348-206Zm0 404 312-186-312-186-312 186 312 186Z"/>
    </Icon>
  );
});

IconMaterialDraftsW100Filled.displayName = 'OnesyIconMaterialDraftsW100Filled';

export default IconMaterialDraftsW100Filled;
