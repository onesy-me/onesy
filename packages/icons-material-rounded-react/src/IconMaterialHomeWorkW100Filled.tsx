import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkW100Filled'

      short_name='HomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-463q0-14 6.5-27.5T117-512l168-119q8.34-5.87 17.07-8.43 8.72-2.57 17.83-2.57 9.1 0 17.89 2.57 8.8 2.56 17.21 8.43l168 119q12 8 18.5 21.5T548-463v231q0 24.75-17.62 42.37Q512.75-172 488-172h-36q-24.75 0-42.37-17.63Q392-207.25 392-232v-102q0-12.5-8.75-21.25T362-364h-84q-12.5 0-21.25 8.75T248-334v102q0 24.75-17.62 42.37Q212.75-172 188-172h-36q-24.75 0-42.37-17.63Q92-207.25 92-232v-231Zm776-265v496q0 24.75-17.62 42.37Q832.75-172 808-172H656q-11 0-19.5-8.5T628-200v-303q0-14-6.5-27.5t-18.38-21.63L448-663q-13-9-20.5-19.5T420-710v-18q0-25 17.5-42.5T480-788h328q24.75 0 42.38 17.62Q868-752.75 868-728ZM707-612h26q6 0 10.5-4.5T748-627v-26q0-6-4.5-10.5T733-668h-26q-6 0-10.5 4.5T692-653v26q0 6 4.5 10.5T707-612Zm0 160h26q6 0 10.5-4.5T748-467v-26q0-6-4.5-10.5T733-508h-26q-6 0-10.5 4.5T692-493v26q0 6 4.5 10.5T707-452Zm0 160h26q6 0 10.5-4.5T748-307v-26q0-6-4.5-10.5T733-348h-26q-6 0-10.5 4.5T692-333v26q0 6 4.5 10.5T707-292Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkW100Filled.displayName = 'OnesyIconMaterialHomeWorkW100Filled';

export default IconMaterialHomeWorkW100Filled;
