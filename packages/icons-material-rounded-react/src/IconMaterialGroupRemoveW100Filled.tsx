import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupRemoveW100Filled'

      short_name='GroupRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M510-514q20-21 27-49t7-57q0-29-7-57t-27-49q41 3 67.5 33.5T604-620q0 42-26.5 72.5T510-514Zm189 282q2-7 3.5-14.6 1.5-7.61 1.5-15.4v-22q0-27.45-9-52.22Q686-361 664-376q38 11 69 33t31 59v22q0 13-8.5 21.5T734-232h-35Zm159-314H698q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Zm-502 34q-44.55 0-76.27-31.72Q248-575.45 248-620t31.73-76.28Q311.45-728 356-728t76.27 31.72Q464-664.55 464-620t-31.73 76.28Q400.55-512 356-512ZM88-262v-22q0-22 13.5-41.5T138-356q55-26 109.5-39T356-408q54 0 108.5 13T574-356q23 11 36.5 30.5T624-284v22q0 13-8.5 21.5T594-232H118q-13 0-21.5-8.5T88-262Z"/>
    </Icon>
  );
});

IconMaterialGroupRemoveW100Filled.displayName = 'OnesyIconMaterialGroupRemoveW100Filled';

export default IconMaterialGroupRemoveW100Filled;
