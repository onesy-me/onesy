import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettopComponentFilled = (props: IIcon) => {

  return (
    <Icon
      name='SettopComponentFilled'

      short_name='SettopComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-280v-400h800v400H80Zm120-160h240v-80H200v80Zm320 0h80v-80h-80v80Zm120 0h80v-80h-80v80Z"/>
    </Icon>
  );
};

IconMaterialSettopComponentFilled.displayName = 'OnesyIconMaterialSettopComponentFilled';

export default IconMaterialSettopComponentFilled;
