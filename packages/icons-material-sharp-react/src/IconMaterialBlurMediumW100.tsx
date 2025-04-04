import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlurMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMediumW100'

      short_name='BlurMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-306H306v-28h209q-34-23-55-57t-24-75H204v-28h232q4-41 24.5-75t54.5-57H186v-28h424q72.21 0 123.1 50.85 50.9 50.85 50.9 123T733.1-357q-50.89 51-123.1 51Zm.12-28q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T713.38-583.5Q670.76-626 609.88-626T506.5-583.38Q464-540.76 464-479.88t42.62 103.38q42.62 42.5 103.5 42.5ZM176-306v-28h50v28h-50Z"/>
    </Icon>
  );
});

IconMaterialBlurMediumW100.displayName = 'OnesyIconMaterialBlurMediumW100';

export default IconMaterialBlurMediumW100;
