import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoStrollerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStrollerW100Filled'

      short_name='NoStroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-166q-20.62 0-35.31-14.69Q240-195.38 240-216q0-20.63 14.69-35.31Q269.38-266 290-266q20.63 0 35.31 14.69Q340-236.63 340-216q0 20.62-14.69 35.31Q310.63-166 290-166Zm322-295L497-576l127-148q14-17 33.94-27.5Q677.87-762 701-762q29 0 48.5 19.5t19.5 48.87V-680h-28v-14q0-17.04-11.48-28.52T701-734q-15.71 0-29.86 7.5Q657-719 646-707l-34 40v206Zm-39 74 81 81H267l160-187L90-830l20-20L872-88l-20 20-319-319h40Zm1 221q-20.62 0-35.31-14.69Q524-195.38 524-216q0-20.63 14.69-35.31Q553.38-266 574-266q20.63 0 35.31 14.69Q624-236.63 624-216q0 20.62-14.69 35.31Q594.63-166 574-166ZM455-618 328-745q24-8 49.09-12.5 25.1-4.5 50.91-4.5 33.41 0 65.7 6 32.3 6 64.3 17L455-618Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerW100Filled.displayName = 'OnesyIconMaterialNoStrollerW100Filled';

export default IconMaterialNoStrollerW100Filled;
