import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinW100'

      short_name='PersonPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-212H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H578l-77 77q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-77-77Zm-182-54q54-53 125.5-83.5T480-380q83 0 154.5 30.5T760-266v-502q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v502Zm280-210q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM222-240h516v-6q-56-54-121.5-80T480-352q-69 0-135 25.5T222-248v8Zm258-264q-35 0-60.5-25.5T394-590q0-35 25.5-60.5T480-676q35 0 60.5 25.5T566-590q0 35-25.5 60.5T480-504Zm0-29Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100.displayName = 'OnesyIconMaterialPersonPinW100';

export default IconMaterialPersonPinW100;
