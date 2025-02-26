import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrafts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Drafts'

      short_name='Drafts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-920 400 239v561H80v-561l400-239Zm0 466 312-186-312-186-312 186 312 186Zm0 94L160-552v352h640v-352L480-360Zm0 160h320-640 320Z"/>
    </Icon>
  );
});

IconMaterialDrafts.displayName = 'OnesyIconMaterialDrafts';

export default IconMaterialDrafts;
