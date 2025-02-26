import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpdateDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabled'

      short_name='UpdateDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m763-84-92-91q-42 26-90 40.5T480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-53 14.5-101t40.5-90l-92-92q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM480-200q36 0 69.5-8.5T613-233L233-613q-16 30-24.5 63.5T200-480q0 117 81.5 198.5T480-200Zm160-360q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h70q-41-56-101-88t-129-32q-27 0-56 5.5T370-738q-15 7-30 .5T318-759q-7-15-.5-30.5T339-811q32-14 69-21.5t72-7.5q82 0 155.5 35T760-706v-54q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v160q0 17-11.5 28.5T800-560H640Zm-160-34q-17 0-28.5-11.5T440-634v-6q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v6q0 17-11.5 28.5T480-594Zm279 278q-14-6-22-20.5t0-33.5q3-8 7-18t6-18q5-16 18.5-24.5T798-437q17 2 27 14.5t6 27.5q-4 14-9.5 29T811-338q-8 19-23 23.5t-29-1.5Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabled.displayName = 'OnesyIconMaterialUpdateDisabled';

export default IconMaterialUpdateDisabled;
