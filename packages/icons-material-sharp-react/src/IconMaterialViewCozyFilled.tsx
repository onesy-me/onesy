import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCozyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCozyFilled'

      short_name='ViewCozy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-540v-300h300v300H120Zm0 420v-300h300v300H120Zm420-420v-300h300v300H540Zm0 420v-300h300v300H540Z"/>
    </Icon>
  );
});

IconMaterialViewCozyFilled.displayName = 'OnesyIconMaterialViewCozyFilled';

export default IconMaterialViewCozyFilled;
