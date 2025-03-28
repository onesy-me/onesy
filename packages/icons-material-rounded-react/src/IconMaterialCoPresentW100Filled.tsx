import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoPresentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentW100Filled'

      short_name='CoPresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-194v-560q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v274q0 6-4 10t-10 4q-6 0-10-4t-4-10v-274q0-25 17.5-42.5T152-814h656q25 0 42.5 17.5T868-754v513q0 15-7.5 27.5T840-194ZM360-432q-45 0-76.5-31.5T252-540q0-45 31.5-76.5T360-648q45 0 76.5 31.5T468-540q0 45-31.5 76.5T360-432ZM122-152q-13 0-21.5-8.5T92-182v-22q0-22 13.5-41.5T142-276q55-26 109.5-39T360-328q54 0 108.5 13T578-276q23 11 36.5 30.5T628-204v22q0 13-8.5 21.5T598-152H122Z"/>
    </Icon>
  );
});

IconMaterialCoPresentW100Filled.displayName = 'OnesyIconMaterialCoPresentW100Filled';

export default IconMaterialCoPresentW100Filled;
