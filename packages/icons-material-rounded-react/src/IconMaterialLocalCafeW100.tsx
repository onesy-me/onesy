import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCafeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeW100'

      short_name='LocalCafe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm101-148q-48 0-81.5-32T212-430v-328q0-13 8.5-21.5T242-788h522q26.4 0 45.2 17.5Q828-753 828-727v80q0 26-18.8 43.5T764-586h-80v156q0 46-33.5 78T569-320H327Zm0-28h242q35.89 0 61.44-24.21Q656-396.41 656-430.4V-760H240v329.97Q240-396 265.56-372q25.55 24 61.44 24Zm357-266h80q15 0 25.5-9.5T800-647v-80q0-14-10.5-23.5T764-760h-80v146ZM327-348h-87 416-329Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeW100.displayName = 'OnesyIconMaterialLocalCafeW100';

export default IconMaterialLocalCafeW100;
