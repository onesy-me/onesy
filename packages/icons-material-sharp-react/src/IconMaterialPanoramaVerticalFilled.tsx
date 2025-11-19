import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaVerticalFilled = (props: IIcon) => {

  return (
    <Icon
      name='PanoramaVerticalFilled'

      short_name='PanoramaVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M139-82q35-75 58-180t23-220q0-115-23-220t-58-180h681q-35 75-57.5 180T740-482q0 115 22.5 220T820-82H139Z"/>
    </Icon>
  );
};

IconMaterialPanoramaVerticalFilled.displayName = 'OnesyIconMaterialPanoramaVerticalFilled';

export default IconMaterialPanoramaVerticalFilled;
