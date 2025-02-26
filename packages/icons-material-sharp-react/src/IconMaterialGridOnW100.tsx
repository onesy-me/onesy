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
      <path d="M172-172v-616h616v616H172Zm28-28h168v-168H200v168Zm196 0h168v-168H396v168Zm196 0h168v-168H592v168ZM200-396h168v-168H200v168Zm196 0h168v-168H396v168Zm196 0h168v-168H592v168ZM200-592h168v-168H200v168Zm196 0h168v-168H396v168Zm196 0h168v-168H592v168Z"/>
    </Icon>
  );
});

IconMaterialGridOnW100.displayName = 'OnesyIconMaterialGridOnW100';

export default IconMaterialGridOnW100;
