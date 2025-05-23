import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableW100'

      short_name='Table'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232q-24.75 0-42.37-17.63Q172-207.25 172-232Zm28-360h560v-136q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v136Zm196 196h168v-168H396v168Zm0 196h168v-168H396v168ZM200-396h168v-168H200v168Zm392 0h168v-168H592v168ZM232-200h136v-168H200v136q0 14 9 23t23 9Zm360 0h136q14 0 23-9t9-23v-136H592v168Z"/>
    </Icon>
  );
});

IconMaterialTableW100.displayName = 'OnesyIconMaterialTableW100';

export default IconMaterialTableW100;
