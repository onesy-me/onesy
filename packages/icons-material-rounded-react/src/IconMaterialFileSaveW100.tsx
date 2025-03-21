import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveW100'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m706-209-81-81q-4-4-9-4t-9 4q-4 4-4 9.67 0 5.66 4 9.33l92 93q9 9 21 9t21-9l93-93q4-3.67 4-9.33 0-5.67-4-9.67t-9.67-4q-5.66 0-9.33 4l-81 81v-190q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v190ZM600-54h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H600q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4ZM246-186q-24 0-42-18t-18-42v-548q0-24 18-42t42-18h249q12.44 0 23.72 5T538-836l178 178q8 8 13 19.28 5 11.28 5 23.72v88q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-99H551q-18.75 0-31.87-13.13Q506-652.25 506-671v-155H246q-12 0-22 10t-10 22v548q0 12 10 22t22 10h226q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H246Zm-32-28v-612 612Z"/>
    </Icon>
  );
});

IconMaterialFileSaveW100.displayName = 'OnesyIconMaterialFileSaveW100';

export default IconMaterialFileSaveW100;
