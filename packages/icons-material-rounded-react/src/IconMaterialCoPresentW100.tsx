import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoPresentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentW100'

      short_name='CoPresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-194v-560q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v274q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-274q0-24.75 17.63-42.38Q127.25-814 152-814h656q24.75 0 42.38 17.62Q868-778.75 868-754v513q0 15-7.5 27.5T840-194ZM360-432q-44.55 0-76.27-31.73Q252-495.45 252-540t31.73-76.28Q315.45-648 360-648t76.27 31.72Q468-584.55 468-540t-31.73 76.27Q404.55-432 360-432Zm0-28q33 0 56.5-23.5T440-540q0-33-23.5-56.5T360-620q-33 0-56.5 23.5T280-540q0 33 23.5 56.5T360-460ZM122-152q-13 0-21.5-8.5T92-182v-22q0-22 13.5-41.5T142-276q55-26 109.5-39T360-328q54 0 108.5 13T578-276q23 11 36.5 30.5T628-204v22q0 13-8.5 21.5T598-152H122Zm-2-28h480v-24q0-14-9.5-26.5T564-252q-48-23-99.69-35.5Q412.63-300 360-300t-104.31 12.5Q204-275 156-252q-17 9-26.5 21.5T120-204v24Zm240-360Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialCoPresentW100.displayName = 'OnesyIconMaterialCoPresentW100';

export default IconMaterialCoPresentW100;
