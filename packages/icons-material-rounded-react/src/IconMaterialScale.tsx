import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScale = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scale'

      short_name='Scale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80H122q-17 0-28.5-12.5T83-122q9-151 86-259.5T400-520v-120q-39-5-88-19t-94.5-38Q172-721 137-754.5T92-831q-5-19 6.5-34t31.5-15h700q20 0 31.5 15t6.5 34q-10 43-45 76.5T742.5-697Q697-673 648-659t-88 19v120q154 30 231 138.5T877-122q1 17-10.5 29.5T838-80H680q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h115q-18-152-113.5-220T480-448q-106 0-201.5 68T165-160h115q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80Zm200-635q91 0 162-24.5T755-800H205q42 36 113 60.5T480-715Zm0 635q-33 0-56.5-23.5T400-160q0-17 6.5-31t17.5-25q12-12 32.5-24.5T505-266l92-37q12-5 21.5 4.5T623-277l-37 92q-13 28-25.5 48.5T536-104q-11 11-25 17.5T480-80Zm0-635Z"/>
    </Icon>
  );
});

IconMaterialScale.displayName = 'OnesyIconMaterialScale';

export default IconMaterialScale;
