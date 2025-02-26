import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3W100'

      short_name='Timer3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-246v-28h240v-192H406v-28h200v-192H366v-28h268v220l-14 14 14 14v220H366Z"/>
    </Icon>
  );
});

IconMaterialTimer3W100.displayName = 'OnesyIconMaterialTimer3W100';

export default IconMaterialTimer3W100;
