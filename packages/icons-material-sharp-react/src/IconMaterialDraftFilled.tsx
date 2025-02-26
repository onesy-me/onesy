import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftFilled'

      short_name='Draft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
});

IconMaterialDraftFilled.displayName = 'OnesyIconMaterialDraftFilled';

export default IconMaterialDraftFilled;
