import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100Filled'

      short_name='MarkEmailRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v179q0 12-5 23.5T810-466L614-271l-72-72q-17-17-42-17t-42 17l-51 51q-12 12-15 28.5t3 32.5q3 7 0 13t-10 6H192Zm288-308L187-713q-5-3-10.5-2t-8.5 6q-4 5-2.5 10.5t6.5 8.5l291 193q8 5 17 5t17-5l291-193q5-4 6.5-9.5T792-710q-3-5-8.5-5.5T773-713L480-520Zm134 362 218-218q5-5 10-5t10 5q5 5 5 10t-5 10L635-139q-5 5-10 7t-11 2q-6 0-11-2t-10-7L490-242q-5-5-5-10t5-10q5-5 10-5t10 5l104 104Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100Filled.displayName = 'OnesyIconMaterialMarkEmailReadW100Filled';

export default IconMaterialMarkEmailReadW100Filled;
