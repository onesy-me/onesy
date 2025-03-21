import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectToSpeakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeakW100'

      short_name='SelectToSpeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-481q0-81-44.5-149T580-731q-6-3-9.5-8.5T570-750q3-6 10-7t14 2q80 38 129 111.5T772-481q0 89-49 162.5T594-207q-7 3-14 2t-10-7q-3-5 .5-10.5t9.5-8.5q75-33 119.5-101T744-481Zm-426 69H218q-13 0-21.5-8.5T188-442v-76q0-13 8.5-21.5T218-548h100l100-100q7-7 16.5-3.5T444-638v316q0 10-9.5 13.5T418-312L318-412Zm306-68q0 29-10 56.5T585-375q-6 5-13.5 1.5T564-385v-192q0-8 8-11t14 2q20 22 29 49.5t9 56.5ZM416-354v-252l-86 86H216v80h114l86 86ZM106-680q-6 0-10-4t-4-10v-114q0-25 17.5-42.5T152-868h114q6 0 10 4t4 10q0 6-4 10t-10 4H152q-14 0-23 9t-9 23v114q0 6-4 10t-10 4ZM694-92q-6 0-10-4t-4-10q0-6 4-10t10-4h114q14 0 23-9t9-23v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 25-17.5 42.5T808-92H694ZM316-480Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeakW100.displayName = 'OnesyIconMaterialSelectToSpeakW100';

export default IconMaterialSelectToSpeakW100;
