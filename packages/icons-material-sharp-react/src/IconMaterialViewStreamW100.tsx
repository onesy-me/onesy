import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewStreamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamW100'

      short_name='ViewStream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-312v-154H200v154q0 12 10 22t22 10h496q12 0 22-10t10-22Zm0-182v-154q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v154h560ZM232-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h496q26 0 43 17t17 43v336q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialViewStreamW100.displayName = 'OnesyIconMaterialViewStreamW100';

export default IconMaterialViewStreamW100;
