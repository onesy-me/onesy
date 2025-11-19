import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOdt = (props: IIcon) => {

  return (
    <Icon
      name='Odt'

      short_name='Odt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360h160v-240H200v240Zm60-60v-120h40v120h-40Zm140 60h130l30-30v-180l-30-30H400v240Zm60-60v-120h40v120h-40Zm190 60h60v-180h50v-60H600v60h50v180ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialOdt.displayName = 'OnesyIconMaterialOdt';

export default IconMaterialOdt;
