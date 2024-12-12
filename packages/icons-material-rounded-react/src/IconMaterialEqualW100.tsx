import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualW100'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M246-332q-14.17 0-24.08-9.88-9.92-9.88-9.92-24t9.92-24.12q9.91-10 24.08-10h468q14.17 0 24.08 9.88 9.92 9.88 9.92 24T738.08-342q-9.91 10-24.08 10H246Zm0-228q-14.17 0-24.08-9.88-9.92-9.88-9.92-24t9.92-24.12q9.91-10 24.08-10h468q14.17 0 24.08 9.88 9.92 9.88 9.92 24T738.08-570q-9.91 10-24.08 10H246Z"/>
    </Icon>
  );
});

IconMaterialEqualW100.displayName = 'OnesyIconMaterialEqualW100';

export default IconMaterialEqualW100;
