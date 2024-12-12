import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdgesensorHighW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighW100'

      short_name='EdgesensorHigh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-306v-228h28v228H66Zm108-120v-228h28v228h-28Zm108 294v-696h396v696H282Zm368-94H310v66h340v-66ZM310-734h340v-66H310v66Zm448 428v-228h28v228h-28Zm108-120v-228h28v228h-28ZM310-734v-66 66Zm0 508v66-66Zm0-28h340v-452H310v452Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighW100.displayName = 'OnesyIconMaterialEdgesensorHighW100';

export default IconMaterialEdgesensorHighW100;
