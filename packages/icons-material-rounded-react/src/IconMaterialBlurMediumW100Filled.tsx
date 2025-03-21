import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlurMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMediumW100Filled'

      short_name='BlurMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h195q-34-23-55-57t-24-75H218q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h218q4-41 24.5-75t54.5-57H200q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h410q72.21 0 123.1 50.85 50.9 50.85 50.9 123T733.1-357q-50.89 51-123.1 51H320Zm290.12-28q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T713.38-583.5Q670.76-626 609.88-626T506.5-583.38Q464-540.76 464-479.88t42.62 103.38q42.62 42.5 103.5 42.5ZM190-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h22q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-22Z"/>
    </Icon>
  );
});

IconMaterialBlurMediumW100Filled.displayName = 'OnesyIconMaterialBlurMediumW100Filled';

export default IconMaterialBlurMediumW100Filled;
