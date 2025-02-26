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
      <path d="m476-132 172-428h28l172 428h-31l-49-122H556l-49 122h-31ZM161-246l-20-20 194-195q-34-35-69.5-88T216-640h31q13 32 45.5 80t62.5 79q58-59 100-123.5T509-720H112v-28h234v-40h28v40h234v28h-69q-17 60-60.5 129.5T375-461l103 106-11 29-112-115-194 195Zm405-34h192l-96-241-96 241Z"/>
    </Icon>
  );
});

IconMaterialTranslateW100Filled.displayName = 'OnesyIconMaterialTranslateW100Filled';

export default IconMaterialTranslateW100Filled;
