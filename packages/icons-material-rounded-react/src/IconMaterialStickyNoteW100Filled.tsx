import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNoteW100Filled'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v361q0 12.44-5 23.72T770-324L636-190q-8 8-19.28 13-11.28 5-23.72 5H232Zm368-28 160-160h-80q-33 0-56.5 23.5T600-280v80ZM480.04-346q5.96 0 9.96-4.02 4-4.03 4-9.98v-226h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106v226q0 5.95 4.04 9.98 4.03 4.02 10 4.02Z"/>
    </Icon>
  );
});

IconMaterialStickyNoteW100Filled.displayName = 'OnesyIconMaterialStickyNoteW100Filled';

export default IconMaterialStickyNoteW100Filled;
