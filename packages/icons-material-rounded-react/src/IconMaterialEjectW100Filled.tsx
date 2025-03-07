import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectW100Filled'

      short_name='Eject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-258h416q5.1 0 8.55 3.43 3.45 3.43 3.45 8.5t-3.45 8.57Q693.1-234 688-234H272q-5.1 0-8.55-3.43-3.45-3.43-3.45-8.5t3.45-8.57q3.45-3.5 8.55-3.5Zm23-167 160-237.58q5-7.42 11.3-10.42 6.29-3 13.7-3 7.41 0 13.7 3 6.3 3 11.3 10.42L665-425q10 15 1.25 31T640-378H320q-17.5 0-26.25-16t1.25-31Z"/>
    </Icon>
  );
});

IconMaterialEjectW100Filled.displayName = 'OnesyIconMaterialEjectW100Filled';

export default IconMaterialEjectW100Filled;
