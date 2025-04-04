import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGooglePlusReshareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GooglePlusReshareW100'

      short_name='GooglePlusReshare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.775 18.35h.7V15q0-1.525 1.063-2.588Q6.6 11.35 8.125 11.35h10.75l-4.25 4.25.5.5 5.1-5.1-5.1-5.1-.5.5 4.25 4.25H8.125q-1.8 0-3.075 1.275Q3.775 13.2 3.775 15Z"/>
    </Icon>
  );
});

IconMaterialGooglePlusReshareW100.displayName = 'OnesyIconMaterialGooglePlusReshareW100';

export default IconMaterialGooglePlusReshareW100;
