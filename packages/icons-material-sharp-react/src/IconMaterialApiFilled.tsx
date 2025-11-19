import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApiFilled = (props: IIcon) => {

  return (
    <Icon
      name='ApiFilled'

      short_name='Api'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z"/>
    </Icon>
  );
};

IconMaterialApiFilled.displayName = 'OnesyIconMaterialApiFilled';

export default IconMaterialApiFilled;
