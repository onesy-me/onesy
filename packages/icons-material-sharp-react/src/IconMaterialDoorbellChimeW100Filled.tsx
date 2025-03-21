import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbellChimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellChimeW100Filled'

      short_name='DoorbellChime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m864-310-20-20q29.85-29.54 45.93-68.73Q906-437.93 906-479.96 906-522 890-561q-16-39-45-69l19-20q34 34 52 78t18 92q0 48-18 92t-52 78Zm-107-80-21-20q14-14 22-31.76 8-17.75 8-38.24 0-20.49-8-38.24Q750-536 736-550l21-20q18.09 18.36 27.54 41.31 9.46 22.95 9.46 48.82t-9.46 48.73Q775.09-408.29 757-390ZM480.15-106Q408-106 357-156.9q-51-50.89-51-123.1v-400q0-72.21 50.85-123.1 50.85-50.9 123-50.9T603-803.1q51 50.89 51 123.1v400q0 72.21-50.85 123.11Q552.3-106 480.15-106ZM480-246q30.52 0 52.26-21.74T554-320q0-30.52-21.74-52.26T480-394q-30.52 0-52.26 21.74T406-320q0 30.52 21.74 52.26T480-246Zm0-28q-19 0-32.5-13.5T434-320q0-19 13.5-32.5T480-366q19 0 32.5 13.5T526-320q0 19-13.5 32.5T480-274Zm0-292q30.52 0 52.26-21.74Q554-609.47 554-640q0-30.53-21.74-52.26Q510.52-714 480-714t-52.26 21.74Q406-670.53 406-640q0 30.53 21.74 52.26Q449.48-566 480-566Z"/>
    </Icon>
  );
});

IconMaterialDoorbellChimeW100Filled.displayName = 'OnesyIconMaterialDoorbellChimeW100Filled';

export default IconMaterialDoorbellChimeW100Filled;
