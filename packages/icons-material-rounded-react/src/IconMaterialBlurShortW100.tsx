import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlurShortW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurShortW100'

      short_name='BlurShort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610.12-334q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T713.38-583.5Q670.76-626 609.88-626T506.5-583.38Q464-540.76 464-479.88t42.62 103.38q42.62 42.5 103.5 42.5Zm-.12 28q-69 0-119-45.5T436-466H278q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h158q3-41 24-75t55-57H200q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h410q72.21 0 123.1 50.85 50.9 50.85 50.9 123T733.1-357q-50.89 51-123.1 51Z"/>
    </Icon>
  );
});

IconMaterialBlurShortW100.displayName = 'OnesyIconMaterialBlurShortW100';

export default IconMaterialBlurShortW100;
