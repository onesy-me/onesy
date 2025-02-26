import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteW100Filled'

      short_name='ContentPaste'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h191q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h191q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H628v50q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63H361.58q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-50H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm248.18-548q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteW100Filled.displayName = 'OnesyIconMaterialContentPasteW100Filled';

export default IconMaterialContentPasteW100Filled;
