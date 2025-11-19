import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevationFilled = (props: IIcon) => {

  return (
    <Icon
      name='ElevationFilled'

      short_name='Elevation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m82-120 258-360h202l298-348v708H82Zm70-233-64-46 172-241h202l188-219 60 52-212 247H300L152-353Z"/>
    </Icon>
  );
};

IconMaterialElevationFilled.displayName = 'OnesyIconMaterialElevationFilled';

export default IconMaterialElevationFilled;
