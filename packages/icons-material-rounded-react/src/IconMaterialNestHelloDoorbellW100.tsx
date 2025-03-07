import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestHelloDoorbellW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHelloDoorbellW100'

      short_name='NestHelloDoorbell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.15-106Q408-106 357-156.9q-51-50.89-51-123.1v-400q0-72.21 50.85-123.1 50.85-50.9 123-50.9T603-803.1q51 50.89 51 123.1v400q0 72.21-50.85 123.11Q552.3-106 480.15-106Zm-.03-28q60.88 0 103.38-42.58Q626-219.17 626-280v-400q0-60.83-42.62-103.42Q540.76-826 479.88-826T376.5-783.42Q334-740.83 334-680v400q0 60.83 42.62 103.42Q419.24-134 480.12-134ZM480-566q30.52 0 52.26-21.74Q554-609.47 554-640q0-30.53-21.74-52.26Q510.52-714 480-714t-52.26 21.74Q406-670.53 406-640q0 30.53 21.74 52.26Q449.48-566 480-566Zm0 86Zm0 234q30.52 0 52.26-21.74T554-320q0-30.52-21.74-52.26T480-394q-30.52 0-52.26 21.74T406-320q0 30.52 21.74 52.26T480-246Zm0-28q-19 0-32.5-13.5T434-320q0-19 13.5-32.5T480-366q19 0 32.5 13.5T526-320q0 19-13.5 32.5T480-274Z"/>
    </Icon>
  );
});

IconMaterialNestHelloDoorbellW100.displayName = 'OnesyIconMaterialNestHelloDoorbellW100';

export default IconMaterialNestHelloDoorbellW100;
