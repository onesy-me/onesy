import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormW100Filled'

      short_name='Storm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M729-126q-6 0-8.5-6t-.5-14q20-66 25-134t-5-136q-20 91-93 147.5T480-212q-71 0-126-36t-92.5-94.5Q224-401 205-477t-19-155q0-47 6-93t19-91q2-8 7-13t13-5q6 0 8.5 6t.5 14q-19 66-24.5 134t4.5 136q20-91 93-147.5T480-748q71 0 126 36t92.5 94.5Q736-559 755-483.5T774-328q0 47-6 93t-19 91q-2 8-7 13t-13 5ZM480-372q45 0 76.5-31.5T588-480q0-45-31.5-76.5T480-588q-45 0-76.5 31.5T372-480q0 45 31.5 76.5T480-372Zm0-28q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialStormW100Filled.displayName = 'OnesyIconMaterialStormW100Filled';

export default IconMaterialStormW100Filled;
