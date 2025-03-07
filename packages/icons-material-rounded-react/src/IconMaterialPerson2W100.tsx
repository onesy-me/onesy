import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2W100'

      short_name='Person2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-512q-14 0-23-10t-7-24l12-95q5-38 35-62.5t69-24.5q39 0 69 24.5t35 62.5l12 95q2 14-7 24t-23 10H394Zm-3-28h178l-13-96q-4-28-25.5-46T480-700q-29 0-50.5 18T404-636l-13 96Zm89 0ZM212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q54 0 108.5 13T698-356q23 11 36.5 30.5T748-284v22q0 13-8.5 21.5T718-232H242q-13 0-21.5-8.5T212-262Zm28 2h480v-24q0-14-9.5-26.5T684-332q-48-23-99.5-35.5T480-380q-53 0-104.5 12.5T276-332q-17 9-26.5 21.5T240-284v24Zm240 0Z"/>
    </Icon>
  );
});

IconMaterialPerson2W100.displayName = 'OnesyIconMaterialPerson2W100';

export default IconMaterialPerson2W100;
