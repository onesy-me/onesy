import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSummarizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeW100'

      short_name='Summarize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-610q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 160q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 160q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm-88 118q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h361q12 0 23.5 5t19.5 13l134 134q8 8 13 19.5t5 23.5v361q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-368H630q-13 0-21.5-8.5T600-630v-130H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm-32-560v160-160 560-560Z"/>
    </Icon>
  );
});

IconMaterialSummarizeW100.displayName = 'OnesyIconMaterialSummarizeW100';

export default IconMaterialSummarizeW100;
