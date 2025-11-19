import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArrowShapeUpFilled'

      short_name='ArrowShapeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-200H183q-19 0-27-17t4-32l289-353q12-15 31-15t31 15l289 353q12 15 4 32t-27 17H640v200q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Z"/>
    </Icon>
  );
};

IconMaterialArrowShapeUpFilled.displayName = 'OnesyIconMaterialArrowShapeUpFilled';

export default IconMaterialArrowShapeUpFilled;
