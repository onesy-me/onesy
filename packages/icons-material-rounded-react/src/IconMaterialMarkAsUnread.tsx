import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkAsUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnread'

      short_name='MarkAsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-33 0-56.5-23.5T80-360v-314q0-15 8.5-29.5T112-726l272-136q17-8 36-8.5t36 8.5l266 136q12 6 20.5 19t11.5 27H637L420-790 160-661v381Zm120 160q-33 0-56.5-23.5T200-200v-360q0-33 23.5-56.5T280-640h520q33 0 56.5 23.5T880-560v360q0 33-23.5 56.5T800-120H280Zm223-245L280-480v280h520v-280L577-365q-17 9-37 9t-37-9Zm37-61 260-134H280l260 134Zm260-134H280h520Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnread.displayName = 'OnesyIconMaterialMarkAsUnread';

export default IconMaterialMarkAsUnread;
