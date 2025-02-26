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
      <path d="M840-194v-592H120v320H92v-348h776v620h-28ZM360-432q-44.55 0-76.27-31.73Q252-495.45 252-540t31.73-76.28Q315.45-648 360-648t76.27 31.72Q468-584.55 468-540t-31.73 76.27Q404.55-432 360-432Zm0-28q33 0 56.5-23.5T440-540q0-33-23.5-56.5T360-620q-33 0-56.5 23.5T280-540q0 33 23.5 56.5T360-460ZM92-152v-52q0-22 13.5-41.5T142-276q55-26 109.5-39T360-328q54 0 108.5 13T578-276q23 11 36.5 30.5T628-204v52H92Zm28-28h480v-24q0-14-9.5-26.5T564-252q-48-23-99.69-35.5Q412.63-300 360-300t-104.31 12.5Q204-275 156-252q-17 9-26.5 21.5T120-204v24Zm240-360Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialCoPresentW100.displayName = 'OnesyIconMaterialCoPresentW100';

export default IconMaterialCoPresentW100;
