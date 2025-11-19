import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapesFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShapesFilled'

      short_name='Shapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320ZM320-80v-162q10 1 20 1.5t20 .5q150 0 255-105t105-255q0-10-.5-20t-1.5-20h162v560H320Z"/>
    </Icon>
  );
};

IconMaterialShapesFilled.displayName = 'OnesyIconMaterialShapesFilled';

export default IconMaterialShapesFilled;
