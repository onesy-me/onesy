import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddW100'

      short_name='NoteAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-386v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12.44 0 23.72 5T604-810l126 126q8 8 13 19.28 5 11.28 5 23.72v449q0 26-17 43t-43 17H272Zm300-549.6V-800H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H601.58q-12.58 0-21.08-8.51-8.5-8.51-8.5-21.09ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialNoteAddW100.displayName = 'OnesyIconMaterialNoteAddW100';

export default IconMaterialNoteAddW100;
