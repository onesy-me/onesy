import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignLanguageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageW100Filled'

      short_name='SignLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-117v-28h148v-80H132v-28h228v-80H92v-28h268v-80H172v-28h292l-72-126 36-30 272 204v304H212Zm91-432-35-26 18-22 26 20 16 28h-25Zm36-106-71-54 18-22 76 57-23 19Zm449 200L515-660 301-820l18-21 214 160 48-65-151-112 18-22 233 174 19-143 45-4 96 327-53 71Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageW100Filled.displayName = 'OnesyIconMaterialSignLanguageW100Filled';

export default IconMaterialSignLanguageW100Filled;
