import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullscreenExitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitW100Filled'

      short_name='FullscreenExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M314-314H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126q12.75 0 21.38 8.62Q342-324.75 342-312v126q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-128Zm333 0v128q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-126q0-12.75 8.63-21.38Q636.25-342 649-342h126q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H647ZM314-646v-128q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v126q0 12.75-8.62 21.37Q324.75-618 312-618H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h128Zm333 0h128q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H649q-12.75 0-21.37-8.63Q619-635.25 619-648v-126q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v128Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExitW100Filled.displayName = 'OnesyIconMaterialFullscreenExitW100Filled';

export default IconMaterialFullscreenExitW100Filled;
