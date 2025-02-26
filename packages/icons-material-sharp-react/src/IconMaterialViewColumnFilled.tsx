import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnFilled'

      short_name='ViewColumn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h213v560H120Zm253 0v-560h213v560H373Zm253 0v-560h213v560H626Z"/>
    </Icon>
  );
});

IconMaterialViewColumnFilled.displayName = 'OnesyIconMaterialViewColumnFilled';

export default IconMaterialViewColumnFilled;
