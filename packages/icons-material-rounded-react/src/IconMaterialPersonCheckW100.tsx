import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCheckW100'

      short_name='PersonCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m702-556 160-160q4-4 9.5-4t10.5 4q5 4 4.5 10t-4.5 10L723-538q-9 9-21 9t-21-9l-74-74q-4-4-4.5-9t4.5-10q4.36-4 10.18-4 5.82 0 9.82 4l75 75Zm-342 44q-44.55 0-76.27-31.72Q252-575.45 252-620t31.73-76.28Q315.45-728 360-728t76.27 31.72Q468-664.55 468-620t-31.73 76.28Q404.55-512 360-512ZM92-262v-22q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v22q0 13-8.5 21.5T598-232H122q-13 0-21.5-8.5T92-262Zm28 2h480v-24q0-14-9.5-26.5T564-332q-48-23-99.69-35.5Q412.63-380 360-380t-104.31 12.5Q204-355 156-332q-17 9-26.5 21.5T120-284v24Zm240-280q33 0 56.5-23.5T440-620q0-33-23.5-56.5T360-700q-33 0-56.5 23.5T280-620q0 33 23.5 56.5T360-540Zm0 220Zm0-300Z"/>
    </Icon>
  );
});

IconMaterialPersonCheckW100.displayName = 'OnesyIconMaterialPersonCheckW100';

export default IconMaterialPersonCheckW100;
