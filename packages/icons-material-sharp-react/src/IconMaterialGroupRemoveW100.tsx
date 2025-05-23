import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupRemoveW100'

      short_name='GroupRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M510-514q20-21 27-49t7-57q0-29-7-57t-27-49q41 3 67.5 33.5T604-620q0 42-26.5 72.5T510-514Zm194 282v-52q0-27.45-9-52.22Q686-361 664-376q38 11 69 33t31 59v52h-60Zm168-314H684v-28h188v28Zm-516 34q-44.55 0-76.27-31.72Q248-575.45 248-620t31.73-76.28Q311.45-728 356-728t76.27 31.72Q464-664.55 464-620t-31.73 76.28Q400.55-512 356-512ZM88-232v-52q0-22 13.5-41.5T138-356q55-26 109.5-39T356-408q54 0 108.5 13T574-356q23 11 36.5 30.5T624-284v52H88Zm268-308q33 0 56.5-23.5T436-620q0-33-23.5-56.5T356-700q-33 0-56.5 23.5T276-620q0 33 23.5 56.5T356-540ZM116-260h480v-24q0-14-9.5-26.5T560-332q-48-23-99.69-35.5Q408.63-380 356-380t-104.31 12.5Q200-355 152-332q-17 9-26.5 21.5T116-284v24Zm240-360Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialGroupRemoveW100.displayName = 'OnesyIconMaterialGroupRemoveW100';

export default IconMaterialGroupRemoveW100;
