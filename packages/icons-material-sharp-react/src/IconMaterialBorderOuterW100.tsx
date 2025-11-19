import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderOuterW100 = (props: IIcon) => {

  return (
    <Icon
      name='BorderOuterW100'

      short_name='BorderOuter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-560H200v560Zm-28 28v-616h616v616H172Zm144-288v-40h40v40h-40Zm144 144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 144v-40h40v40h-40Z"/>
    </Icon>
  );
};

IconMaterialBorderOuterW100.displayName = 'OnesyIconMaterialBorderOuterW100';

export default IconMaterialBorderOuterW100;
