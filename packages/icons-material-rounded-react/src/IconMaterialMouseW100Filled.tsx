import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseW100Filled'

      short_name='Mouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.19-132Q385-132 318.5-198.36 252-264.73 252-360v-208h456v208q0 95.27-66.31 161.64Q575.38-132 480.19-132ZM252-596q0-91 61.5-157T466-824v228H252Zm242 0v-228q91 5 152.5 71T708-596H494Z"/>
    </Icon>
  );
});

IconMaterialMouseW100Filled.displayName = 'OnesyIconMaterialMouseW100Filled';

export default IconMaterialMouseW100Filled;
