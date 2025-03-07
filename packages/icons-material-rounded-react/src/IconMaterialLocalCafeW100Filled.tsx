import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCafeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeW100Filled'

      short_name='LocalCafe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-6 0-10-4t-4-10q0-6 4-10t10-4h508q6 0 10 4t4 10q0 6-4 10t-10 4H226Zm101-148q-48 0-81.5-32T212-430v-328q0-13 8.5-21.5T242-788h522q26 0 45 17.5t19 43.5v80q0 26-19 43.5T764-586h-80v156q0 46-33.5 78T569-320H327Zm357-294h80q15 0 25.5-9.5T800-647v-80q0-14-10.5-23.5T764-760h-80v146Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeW100Filled.displayName = 'OnesyIconMaterialLocalCafeW100Filled';

export default IconMaterialLocalCafeW100Filled;
