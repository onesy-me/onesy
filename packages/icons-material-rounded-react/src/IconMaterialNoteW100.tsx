import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteW100'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.5-13.75V4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55V7.7h-2.95q-.325 0-.537-.213-.213-.212-.213-.537ZM6 4v3.7V4v16V4Z"/>
    </Icon>
  );
});

IconMaterialNoteW100.displayName = 'OnesyIconMaterialNoteW100';

export default IconMaterialNoteW100;
