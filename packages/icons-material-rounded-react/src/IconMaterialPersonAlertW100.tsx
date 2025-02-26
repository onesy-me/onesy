import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAlertW100'

      short_name='PersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800.04-534q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Zm-.08-132q-5.96 0-9.96-4.03-4-4.02-4-9.97v-120q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v120q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM360-512q-44.55 0-76.27-31.72Q252-575.45 252-620t31.73-76.28Q315.45-728 360-728t76.27 31.72Q468-664.55 468-620t-31.73 76.28Q404.55-512 360-512ZM92-262v-22q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v22q0 13-8.5 21.5T598-232H122q-13 0-21.5-8.5T92-262Zm28 2h480v-24q0-14-9.5-26.5T564-332q-48-23-99.69-35.5Q412.63-380 360-380t-104.31 12.5Q204-355 156-332q-17 9-26.5 21.5T120-284v24Zm240-280q33 0 56.5-23.5T440-620q0-33-23.5-56.5T360-700q-33 0-56.5 23.5T280-620q0 33 23.5 56.5T360-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialPersonAlertW100.displayName = 'OnesyIconMaterialPersonAlertW100';

export default IconMaterialPersonAlertW100;
