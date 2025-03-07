import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightW100'

      short_name='Highlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-644-50-50q-4-4-4.5-9.5T206-714q5-5 10-5t10 5l50 50q4 4 4.5 9.5T276-644q-5 5-10 5t-10-5Zm210-84v-72q0-6 4-10t10-4q6 0 10 4t4 10v72q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm218 64 50-50q4-4 9.5-4.5T754-714q5 5 5 10t-5 10l-50 50q-4 4-9.5 4.5T684-644q-5-5-5-10t5-10ZM412-192v-110L310-404q-8-8-13-19.5t-5-23.5v-41q0-25 17.5-42.5T352-548h256q25 0 42.5 17.5T668-488v41q0 12-5 23.5T650-404L548-302v110q0 25-17.5 42.5T488-132h-16q-25 0-42.5-17.5T412-192Zm60 32h16q14 0 23-9t9-23v-122l120-120v-54q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v54l120 120v122q0 14 9 23t23 9Zm8-180Z"/>
    </Icon>
  );
});

IconMaterialHighlightW100.displayName = 'OnesyIconMaterialHighlightW100';

export default IconMaterialHighlightW100;
