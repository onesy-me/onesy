import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignpostW100 = (props: IIcon) => {

  return (
    <Icon
      name='SignpostW100'

      short_name='Signpost'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-160H266l-94-94 94-94h200v-80H212v-188h254v-80h28v80h200l94 94-94 94H494v80h254v188H494v160h-28ZM240-588h443l66-66-66-66H240v132Zm37 268h443v-132H277l-66 66 66 66Zm-37-268v-132 132Zm480 268v-132 132Z"/>
    </Icon>
  );
};

IconMaterialSignpostW100.displayName = 'OnesyIconMaterialSignpostW100';

export default IconMaterialSignpostW100;
