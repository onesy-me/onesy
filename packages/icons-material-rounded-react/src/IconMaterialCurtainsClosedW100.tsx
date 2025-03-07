import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedW100'

      short_name='CurtainsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-200v-528q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66Zm28 0h159v-560H272q-14 0-23 9t-9 23v528Zm187 0h106v-560H427v560Zm134 0h159v-528q0-14-9-23t-23-9H561v560Zm-321 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedW100.displayName = 'OnesyIconMaterialCurtainsClosedW100';

export default IconMaterialCurtainsClosedW100;
