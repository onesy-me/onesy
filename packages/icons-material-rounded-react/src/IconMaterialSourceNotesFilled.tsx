import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSourceNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesFilled'

      short_name='SourceNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40q-58 0-105-29.5T543-147q-6-11-1.5-23t15.5-17q11-5 22.5-1.5T597-174q17 33 49.5 53.5T720-100q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622-340h28q13 0 21.5 8.5T680-310q0 13-8.5 21.5T650-280h-90q-17 0-28.5-11.5T520-320v-90q0-13 8.5-21.5T550-440q13 0 21.5 8.5T580-410v27q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v175q0 18-14.5 28.5T794-551q-18-5-36.5-7t-37.5-2q-42 0-81 10.5T565-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h150q-14 18-26 38t-21 42H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280h82q-2 10-2 19.5v20.5q0 19 2 37.5t7 36.5q4 17-6.5 31.5T375-120H200Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesFilled.displayName = 'OnesyIconMaterialSourceNotesFilled';

export default IconMaterialSourceNotesFilled;
