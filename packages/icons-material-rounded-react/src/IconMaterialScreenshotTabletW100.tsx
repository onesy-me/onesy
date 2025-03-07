import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotTabletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTabletW100'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-24.75 0-42.37-17.63Q92-247.25 92-272v-416q0-24.75 17.63-42.38Q127.25-748 152-748h656q24.75 0 42.38 17.62Q868-712.75 868-688v416q0 24.75-17.62 42.37Q832.75-212 808-212H152Zm34-508h-34q-14 0-23 9t-9 23v416q0 14 9 23t23 9h34v-480Zm28 480h532v-480H214v480Zm560-480v480h34q14 0 23-9t9-23v-416q0-14-9-23t-23-9h-34Zm0 0h66-66Zm-588 0h-66 66Zm472 392h-76q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h82q9 0 15.5-7t6.5-16v-81q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v76ZM302-632h76q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4h-81q-9 0-16 6.5t-7 15.5v82q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-76Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTabletW100.displayName = 'OnesyIconMaterialScreenshotTabletW100';

export default IconMaterialScreenshotTabletW100;
