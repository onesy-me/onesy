import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceBetweenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetweenW100'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M813.96-132q-5.96 0-9.96-4.02-4-4.03-4-9.98v-160h-38q-12.75 0-21.37-8.63Q732-323.25 732-336v-288q0-12.75 8.63-21.38Q749.25-654 762-654h38v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v668q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm-668 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-668q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160h38q12.75 0 21.38 8.62Q228-636.75 228-624v288q0 12.75-8.62 21.37Q210.75-306 198-306h-38v160q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetweenW100.displayName = 'OnesyIconMaterialAlignJustifySpaceBetweenW100';

export default IconMaterialAlignJustifySpaceBetweenW100;
