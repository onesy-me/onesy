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
      <path d="m480-920 400 239v561H80v-561l400-239Zm0 466 312-186-312-186-312 186 312 186Z"/>
    </Icon>
  );
});

IconMaterialDraftsFilled.displayName = 'OnesyIconMaterialDraftsFilled';

export default IconMaterialDraftsFilled;
