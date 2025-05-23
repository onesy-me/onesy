import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlagiarismW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlagiarismW100Filled'

      short_name='Plagiarism'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-336q20 0 38-6.5t34-17.5l112 112 20-20-112-112q13-15 18.5-33.5T554-452q0-47-33-79.5T440-564q-48 0-81 33t-33 81q0 48 32.5 81t79.5 33Zm2-28q-35 0-60.5-25.5T354-450q0-35 25.5-60.5T440-536q35 0 60.5 25.5T526-450q0 35-25.5 60.5T440-364ZM212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialPlagiarismW100Filled.displayName = 'OnesyIconMaterialPlagiarismW100Filled';

export default IconMaterialPlagiarismW100Filled;
