import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamW100Filled'

      short_name='Stream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-426q-23 0-38.5-15.5T106-480q0-23 15.5-38.5T160-534q23 0 38.5 15.5T214-480q0 23-15.5 38.5T160-426Zm56 188 118-118q4-4 9.5-4.5T354-356q5 5 5 10t-5 10L236-218q-4 4-9.5 4.5T216-218q-5-5-5-10t5-10Zm120-368L218-724q-4-4-4.5-9.5T218-744q5-5 10-5t10 5l118 118q4 4 4.5 9.5T356-606q-5 5-10 5t-10-5Zm144 500q-23 0-38.5-15.5T426-160q0-23 15.5-38.5T480-214q23 0 38.5 15.5T534-160q0 23-15.5 38.5T480-106Zm0-640q-23 0-38.5-15.5T426-800q0-23 15.5-38.5T480-854q23 0 38.5 15.5T534-800q0 23-15.5 38.5T480-746Zm124 120 120-118q4-4 9.5-4.5T744-744q5 5 5 10t-5 10L624-606q-4 4-9.5 4.5T604-606q-5-5-5-10t5-10Zm120 408L606-336q-4-4-4.5-9.5T606-356q5-5 10-5t10 5l118 118q4 4 4.5 9.5T744-218q-5 5-10 5t-10-5Zm76-208q-23 0-38.5-15.5T746-480q0-23 15.5-38.5T800-534q23 0 38.5 15.5T854-480q0 23-15.5 38.5T800-426Z"/>
    </Icon>
  );
});

IconMaterialStreamW100Filled.displayName = 'OnesyIconMaterialStreamW100Filled';

export default IconMaterialStreamW100Filled;
