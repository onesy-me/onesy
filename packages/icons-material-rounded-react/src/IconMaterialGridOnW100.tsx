import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnW100'

      short_name='GridOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h136v-168H200v136q0 14 9 23t23 9Zm164 0h168v-168H396v168Zm196 0h136q14 0 23-9t9-23v-136H592v168ZM200-396h168v-168H200v168Zm196 0h168v-168H396v168Zm196 0h168v-168H592v168ZM200-592h168v-168H232q-14 0-23 9t-9 23v136Zm196 0h168v-168H396v168Zm196 0h168v-136q0-14-9-23t-23-9H592v168Z"/>
    </Icon>
  );
});

IconMaterialGridOnW100.displayName = 'OnesyIconMaterialGridOnW100';

export default IconMaterialGridOnW100;
