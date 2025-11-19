import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscape = (props: IIcon) => {

  return (
    <Icon
      name='Landscape'

      short_name='Landscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/>
    </Icon>
  );
};

IconMaterialLandscape.displayName = 'OnesyIconMaterialLandscape';

export default IconMaterialLandscape;
