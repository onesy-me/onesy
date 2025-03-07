import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardiology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cardiology'

      short_name='Cardiology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-756q34-40 81-62t99-22q88 0 149.5 56T879-640q1 17-10.5 28.5T840-599q-17 1-28.5-10.5T799-638q-6-54-44.5-88T660-760q-40 0-75.5 20T529-688q-9 14-22.5 21t-27.5 7q-14 0-27-7t-21-21q-20-32-55.5-52T300-760q-56 0-94.5 34T161-638q-1 17-12.5 28.5T120-599q-17-1-28.5-12.5T81-640q8-88 69.5-144T300-840q52 0 99 22t81 62Zm0 623q-14 0-28-5t-25-16q-43-38-79.5-72.5T279-292q-14-14-12.5-29.5T279-348q11-11 26.5-12.5T335-349q30 29 65.5 62.5T480-214q44-39 79.5-72.5T625-349q14-14 29.5-11.5T681-347q11 11 12 27t-13 30q-32 30-68.5 64T533-154q-11 11-25 16t-28 5Zm-38-187q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h280q17 0 28.5-11.5T920-480q0-17-11.5-28.5T880-520H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H80q-17 0-28.5 11.5T40-480q0 17 11.5 28.5T80-440h257l69 102q6 9 15.5 13.5T442-320Zm38-167Z"/>
    </Icon>
  );
});

IconMaterialCardiology.displayName = 'OnesyIconMaterialCardiology';

export default IconMaterialCardiology;
