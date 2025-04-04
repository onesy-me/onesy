import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeW100'

      short_name='Stethoscope'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M538.13-132q-86.87 0-148-60.5Q329-253 329-340v-20q-73-5-123.5-59T155-548v-184q0-12.75 8.63-21.38Q172.25-762 185-762h90v-26q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v80q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-26h-92v186q0 66 47 113t113 47q66 0 113-47t47-113v-186h-92v26q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-80q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v26h90q12.75 0 21.38 8.62Q531-744.75 531-732v184q0 75-50.5 129T357-360v20q0 75 52.79 127.5T538-160q75 0 127.5-52.5T718-340v-61q-26-5-43-25.74T658-474q0-30.83 21.62-52.42Q701.24-548 732.12-548t52.38 21.58Q806-504.83 806-474q0 26.52-17 47.26T746-401v61q0 87-60.5 147.5T538.13-132ZM732-428q19 0 32.5-13.5T778-474q0-19-13.5-32.5T732-520q-19 0-32.5 13.5T686-474q0 19 13.5 32.5T732-428Zm0-46Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeW100.displayName = 'OnesyIconMaterialStethoscopeW100';

export default IconMaterialStethoscopeW100;
