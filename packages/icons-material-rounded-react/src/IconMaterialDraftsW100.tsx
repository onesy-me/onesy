import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsW100'

      short_name='Drafts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m511-840 303 180q6 5 10 11.5t4 14.5v402q0 26-17 43t-43 17H192q-26 0-43-17t-17-43v-402q0-8 4-14.5t10-11.5l303-180q14-8 31-8t31 8Zm-15 376 296-176-296-176q-8-5-16-5t-16 5L168-640l296 176q8 5 16 5t16-5Zm-47 24L160-612v380q0 14 9 23t23 9h576q14 0 23-9t9-23v-380L511-440q-14 8-31 8t-31-8Zm62 240h289-640 351Z"/>
    </Icon>
  );
});

IconMaterialDraftsW100.displayName = 'OnesyIconMaterialDraftsW100';

export default IconMaterialDraftsW100;
