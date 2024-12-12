import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkW100'

      short_name='Work'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-376q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10Zm208-468h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialWorkW100.displayName = 'OnesyIconMaterialWorkW100';

export default IconMaterialWorkW100;
