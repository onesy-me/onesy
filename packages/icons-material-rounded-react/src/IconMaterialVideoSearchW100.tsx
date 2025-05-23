import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSearchW100'

      short_name='VideoSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M334-529.2v-101.3q0-9.5 7.5-14t15.54.3L439-593q7 4.5 7 12.75T439-567l-81.96 51.2q-8.04 4.8-15.54.45-7.5-4.36-7.5-13.85ZM382-360q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l240 240q4 4 4.5 9.5T788-174q-5 5-10 5t-10-5L528-414q-30 26-69 40t-77 14Zm0-28q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/>
    </Icon>
  );
});

IconMaterialVideoSearchW100.displayName = 'OnesyIconMaterialVideoSearchW100';

export default IconMaterialVideoSearchW100;
