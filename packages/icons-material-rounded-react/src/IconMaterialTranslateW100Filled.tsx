import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTranslateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranslateW100Filled'

      short_name='Translate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m556-254-45 113q-2 4-5.5 6.5T497-132q-8 0-12-6.5t-1-13.5l161-400q2-4 5-6t7-2h10q4 0 7 2t5 6l161 400q3 7-1 13.5t-12 6.5q-5 0-8.5-2.5T813-141l-45-113H556ZM355-441 171-256q-4 5-9.5 5t-10.5-5q-5-5-5-10t5-10l184-185q-34-35-69.5-88T216-640h31q13 32 45.5 80t62.5 79q58-59 100-123.5T509-720H126q-6 0-10-4t-4-10q0-6 4-10t10-4h220v-26q0-6 4-10t10-4q6 0 10 4t4 10v26h220q6 0 10 4t4 10q0 6-4 10t-10 4h-55q-17 60-60.5 129.5T375-461l103 106-11 29-112-115Zm211 161h192l-96-241-96 241Z"/>
    </Icon>
  );
});

IconMaterialTranslateW100Filled.displayName = 'OnesyIconMaterialTranslateW100Filled';

export default IconMaterialTranslateW100Filled;
