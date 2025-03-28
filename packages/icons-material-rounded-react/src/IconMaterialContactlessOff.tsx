import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactlessOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOff'

      short_name='ContactlessOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M556-283q-14-6-21-20.5t-2-29.5q7-19 11.5-38.5T551-411l69 69q-2 9-5 18.5t-6 18.5q-5 16-20.5 22.5T556-283Zm-129-52q-15-6-21.5-20.5T404-387q7-23 9.5-46t2.5-47q0-19-1-37t-5-35l86 86q-1 28-5.5 55.5T478-357q-5 15-20 21.5t-31 .5Zm-130-55q-14-6-21-20t-4-30q2-10 3-20t1-20q0-10-1-20t-3-20q-3-16 4-30.5t21-19.5q17-7 32 0t19 24q4 16 6 32.5t2 33.5q0 17-2 33.5t-6 32.5q-4 17-19 24t-32 0Zm338-51-80-80q-2-28-8-54.5T533-627q-5-15 1.5-29.5T555-677q17-8 33-1t21 23q14 42 20.5 85.5T636-480v19.5q0 9.5-1 19.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701l-90-91q-12-12-12-28.5T56-849q12-12 28.5-12t28.5 12l735 735q12 12 12 28.5T848-57q-12 12-28.5 12T791-57l-90-89q-48 32-103.5 49T480-80Zm0-80q45 0 85.5-12t76.5-33L205-642q-21 36-33 76.5T160-480q0 133 93.5 226.5T480-160Zm-56-264Zm135-135ZM314-844q39-18 81-27t85-9q80 0 153 30t130 87q57 57 87 130t30 153q0 43-9 85t-27 81q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-62t6.5-64q0-134-93-227t-227-93q-32 0-64 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23Z"/>
    </Icon>
  );
});

IconMaterialContactlessOff.displayName = 'OnesyIconMaterialContactlessOff';

export default IconMaterialContactlessOff;
