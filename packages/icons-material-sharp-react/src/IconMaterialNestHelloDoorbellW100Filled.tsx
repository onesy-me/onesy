import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestHelloDoorbellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHelloDoorbellW100Filled'

      short_name='NestHelloDoorbell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.15-106Q408-106 357-156.9q-51-50.89-51-123.1v-400q0-72.21 50.85-123.1 50.85-50.9 123-50.9T603-803.1q51 50.89 51 123.1v400q0 72.21-50.85 123.11Q552.3-106 480.15-106ZM480-566q30.52 0 52.26-21.74Q554-609.47 554-640q0-30.53-21.74-52.26Q510.52-714 480-714t-52.26 21.74Q406-670.53 406-640q0 30.53 21.74 52.26Q449.48-566 480-566Zm0 320q30.52 0 52.26-21.74T554-320q0-30.52-21.74-52.26T480-394q-30.52 0-52.26 21.74T406-320q0 30.52 21.74 52.26T480-246Zm0-28q-19 0-32.5-13.5T434-320q0-19 13.5-32.5T480-366q19 0 32.5 13.5T526-320q0 19-13.5 32.5T480-274Z"/>
    </Icon>
  );
});

IconMaterialNestHelloDoorbellW100Filled.displayName = 'OnesyIconMaterialNestHelloDoorbellW100Filled';

export default IconMaterialNestHelloDoorbellW100Filled;
