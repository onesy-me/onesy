import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrushW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='BrushW100Filled'

      short_name='Brush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-192q-17 0-34-4t-32-12q18-17 28-39.5t10-52.5q0-29 19.5-48.5T300-368q29 0 48.5 19.5T368-300q0 45-31.5 76.5T260-192Zm184-194-56-56 346-346 56 56-346 346Z"/>
    </Icon>
  );
};

IconMaterialBrushW100Filled.displayName = 'OnesyIconMaterialBrushW100Filled';

export default IconMaterialBrushW100Filled;
