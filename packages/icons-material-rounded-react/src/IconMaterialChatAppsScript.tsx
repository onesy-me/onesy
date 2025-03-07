import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatAppsScript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAppsScript'

      short_name='ChatAppsScript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M578-160q-17 0-28.5-11.5T538-200q0-17 11.5-28.5T578-240h113l-92-65q-14-10-16.5-25.5T589-360q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T890-470q16 5 24.5 18.5T918-422l-62 232q-4 14-14.5 22t-24.5 8H578ZM240-280l-86 86q-10 10-22 5t-12-19v-552q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v180q0 17-11.5 28.5T720-540q-17 0-28.5-11.5T680-580v-180H200v400h260q17 0 28.5 11.5T500-320q0 17-11.5 28.5T460-280H240Zm80-320h240q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160h120q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm-120 80v-400 400Z"/>
    </Icon>
  );
});

IconMaterialChatAppsScript.displayName = 'OnesyIconMaterialChatAppsScript';

export default IconMaterialChatAppsScript;
