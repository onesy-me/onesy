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
      <path d="M714-126q24-70 30.5-143.5T740-416q-20 91-93 147.5T480-212q-71 0-126-36t-92.5-94.5Q224-401 205-477t-19-155q0-51 7.5-102T216-834h30q-22 71-29.5 144t3.5 146q20-91 93-147.5T480-748q71 0 126 36t92.5 94.5Q736-559 755-483.5T774-328q0 51-7.5 102T744-126h-30ZM480-372q45 0 76.5-31.5T588-480q0-45-31.5-76.5T480-588q-45 0-76.5 31.5T372-480q0 45 31.5 76.5T480-372Zm0-28q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialStormW100Filled.displayName = 'OnesyIconMaterialStormW100Filled';

export default IconMaterialStormW100Filled;
