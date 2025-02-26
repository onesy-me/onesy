import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteStackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackW100Filled'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-132v-496h496v326L658-132H332Zm468-188H640v160l160-160Zm-591 57-86-488 488-86 19 109H232.11v460.87L209-263Z"/>
    </Icon>
  );
});

IconMaterialNoteStackW100Filled.displayName = 'OnesyIconMaterialNoteStackW100Filled';

export default IconMaterialNoteStackW100Filled;
