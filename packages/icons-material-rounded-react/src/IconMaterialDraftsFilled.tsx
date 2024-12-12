import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsFilled'

      short_name='Drafts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m521-896 321 192q18 11 28 30t10 40v434q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-434q0-21 10-40t28-30l321-192q19-11 41-11t41 11Zm-41 442 312-186-312-186-312 186 312 186Z"/>
    </Icon>
  );
});

IconMaterialDraftsFilled.displayName = 'OnesyIconMaterialDraftsFilled';

export default IconMaterialDraftsFilled;
