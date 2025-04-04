import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoAdultContent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAdultContent'

      short_name='NoAdultContent'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M4,12c0-1.85,0.63-3.54,1.69-4.9L7.59,9h2.83 L7.1,5.69C8.46,4.63,10.15,4,12,4c4.41,0,8,3.59,8,8c0,1.85-0.63,3.54-1.69,4.9l-1.9-1.9h-2.83l3.31,3.31 C15.54,19.37,13.85,20,12,20C7.59,20,4,16.41,4,12z"/><polygon points="14.25,14 12.75,12 14.25,10 12.75,10 12,11 11.25,10 9.75,10 11.25,12 9.75,14 11.25,14 12,13 12.75,14"/><polygon points="8,10 7.25,11 6.5,10 5,10 6.5,12 5,14 6.5,14 7.25,13 8,14 9.5,14 8,12 9.5,10"/><polygon points="16,14 16.75,13 17.5,14 19,14 17.5,12 19,10 17.5,10 16.75,11 16,10 14.5,10 16,12 14.5,14"/></g></g>
    </Icon>
  );
});

IconMaterialNoAdultContent.displayName = 'OnesyIconMaterialNoAdultContent';

export default IconMaterialNoAdultContent;
